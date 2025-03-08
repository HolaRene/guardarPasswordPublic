import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { articuloId: string } }
) {
  try {
    const { articuloId } = params

    // Verifica si el articuloId está presente
    if (!articuloId) {
      return new NextResponse('Debe proporcionar un id de artículo', {
        status: 400,
      })
    }

    // Obtén los valores del cuerpo de la solicitud
    const valores = await req.json()

    // Actualiza el elemento en la base de datos
    const elemento = await db.element.update({
      where: { id: articuloId },
      data: valores,
    })

    // Devuelve la respuesta con el elemento actualizado
    return NextResponse.json(elemento)
  } catch (error) {
    console.error('Error en PATCH /api/articulos/[articuloId]:', error)
    return new NextResponse('Ha ocurrido un error', { status: 500 })
  }
}
