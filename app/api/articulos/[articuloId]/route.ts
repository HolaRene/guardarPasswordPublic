import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { articuloId: string } }
) {
  try {
    const { articuloId } = await params
    const valores = await req.json()
    if (!articuloId) {
      return new NextResponse('Debe proporcionar un id de articulo', {
        status: 400,
      })
    }
    const elemento = await db.element.update({
      where: { id: articuloId },
      data: { ...valores },
    })
    return NextResponse.json(elemento)
  } catch (error) {
    console.log(error)
    return new NextResponse('Ha ocurrido un error', { status: 500 })
  }
}
