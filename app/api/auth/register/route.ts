import { db } from '@/lib/db'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json()

    // Validar que todos los campos estén presentes
    if (!username || !email || !password) {
      return new NextResponse('Debes llenar todos los campos', { status: 400 })
    }

    // Hashear la contraseña
    const hashedPassword = await hash(password, 10)

    // Crear el usuario en la base de datos
    const usuarioNuevo = await db.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    })

    // Verificar que el usuario se haya creado correctamente
    if (!usuarioNuevo) {
      return new NextResponse('Error al crear el usuario', { status: 500 })
    }

    // Devolver el usuario creado
    return NextResponse.json(usuarioNuevo, { status: 201 })
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
