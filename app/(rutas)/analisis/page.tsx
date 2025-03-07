import { countarPasswords } from '@/lib/conteoPassword'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import RepitedPasswordChart from './components/RepitedPasswordChart/RepitedPasswordChart'
import ViewsAnalisisChart from './components/ViewsAnalisisChart/ViewsAnalisisChart'
import { TrafficDevice } from './components/TrafficDevice'

export default async function page() {
  const user = await getServerSession()
  if (!user || !user.user?.email) {
    return redirect('/')
  }
  const datos = await db.user.findUnique({
    where: {
      email: user.user.email,
    },
    include: {
      elements: {
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  })
  if (!user || !datos?.elements) {
    return redirect('/')
  }
  console.log('Total contraseñas esperadas:', datos.elements.length)
  const { repetida, unica } = countarPasswords(datos.elements)
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-5 mb-4'>
        <RepitedPasswordChart repetidos={repetida} unicos={unica} />
        <ViewsAnalisisChart repetida={repetida} unica={unica} />
      </div>
      <TrafficDevice />
    </div>
  )
}
