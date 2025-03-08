import FormEditElement from '@/components/shared/FormEditElemento/FormEditElement'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function ElementoEditar({
  params,
}: Readonly<{ params: { elementoId: string } }>) {
  const { elementoId } = params // ❌ No usar await aquí

  const sesion = await getServerSession()
  if (!sesion || !sesion.user?.email) {
    return redirect('/')
  }

  // Obtener el elemento a editar de la base de datos
  const elemento = await db.element.findUnique({
    where: { id: elementoId },
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
