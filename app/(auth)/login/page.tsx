import { getServerSession } from 'next-auth'
import ImageAuth from './components/ImageAuth/ImageAuth'
import TabsForm from './components/TabsForm/TabsForm'
import { redirect } from 'next/navigation'

const login = async () => {
  const sesion = await getServerSession()
  if (sesion) {
    redirect('/')
  }
  return (
    <div className='grid md:grid-cols-2 h-full max-h-screen overflow-hidden'>
      <div className='flex justify-center h-full'>
        <div className='flex flex-col items-center justify-center p-6 text-white'>
          <h1 className='text-blue-500 text-2xl text-center mb-5'>
            Donjoe Contrasenia
          </h1>
          <h2 className='text-4xl font-medium text-black'>
            Bienvenido de nuevo
          </h2>
          <p className='text-center mt-4 mb-6 text-slate-400 text-sm'>
            Bienvenido de nuevo, te damos la bienvenida a nuestra plataforma de
            gestión de contraseñas. Por favor, introduce tus credenciales para
            iniciar sesión.
          </p>
          <TabsForm />
        </div>
      </div>
      <ImageAuth />
    </div>
  )
}

export default login
