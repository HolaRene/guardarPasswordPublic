import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const {
      typeElement,
      isFavorite,
      name,
      password,
      urlWebsite,
      userId,
      notas,
      directory,
      username,
    } = await req.json()
    const elemento = await db.element.create({
      data: {
        typeElement,
        isFavorite,
        name,
        password,
        urlWebsite,
        userId,
        notas,
        directory,
        username,
      },
    })
    return NextResponse.json(elemento)
  } catch (error) {
    // Manejo seguro del error
    if (error instanceof Error) {
      console.error('Error en el servidor:', error.message) // Imprime el mensaje de error
    } else {
      console.error('Error desconocido:', error) // Imprime el error tal cual
    }

    // Manejar errores específicos de Prisma
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return new NextResponse(
        'El correo electrónico o nombre de usuario ya está en uso',
        { status: 400 }
      )
    }

    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
