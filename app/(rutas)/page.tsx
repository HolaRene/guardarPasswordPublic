import { getServerSession } from 'next-auth'
import HaederMain from './(home)/components/HeaderMain/Headermain'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import TableData from './(home)/components/TableData/TableData'

export default async function Home() {
  const sesion = await getServerSession()
  if (!sesion || !sesion.user?.email) {
    return redirect('/')
  }
  const user = await db.user.findUnique({
    where: {
      email: sesion.user.email,
    },
    include: {
      elements: {
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  })
  if (!user || !user.elements) {
    return redirect('/')
  }

  return (
    <div>
      <HaederMain userId={user.id} />
      <TableData elements={user.elements} />
    </div>
  )
}
