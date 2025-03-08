import FormEditElement from '@/components/shared/FormEditElemento/FormEditElement'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { FC } from 'react'

interface ElementoEditarProps {
  params: Promise<{ elementoId: string }>
}
export const ElementoEditar: FC<ElementoEditarProps> = async ({ params }) => {
  const path = await params
  const id = path.elementoId

  const sesion = await getServerSession()
  if (!sesion || !sesion.user?.email) {
    return redirect('/')
  }

  // Obtener el elemento a editar de la base de datos
  const elemento = await db.element.findUnique({
    where: { id: id },
  })

  // Si el elemento no existe, redireccionar al inicio
  if (!elemento) {
    return redirect('/')
  }

  return (
    <div>
      <h1 className='mb-2'>Editando Elemento</h1>
      <div>
        <FormEditElement dataElement={elemento} />
      </div>
    </div>
  )
}
