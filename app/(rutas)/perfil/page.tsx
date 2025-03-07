import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Formprofile from './components/Formprofile'

export default async function PerfilPage() {
  const sesion = await getServerSession()
  if (!sesion || !sesion.user?.email) {
    redirect('/')
  }
  const usuario = await db.user.findUnique({
    where: { email: sesion.user.email },
  })

  if (!usuario) {
    redirect('/')
  }

  return (
    <div>
      <h1>Detalles de tu cuenta</h1>
      <Formprofile user={usuario} />
    </div>
  )
}
