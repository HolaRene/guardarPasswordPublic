import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(req: Request) {
  try {
    const { name, email, profileImage, username, id } = await req.json()
    if (!name || !email || !profileImage || !username) {
      return new NextResponse('Debes completar todos los campos', {
        status: 400,
      })
    }
    const user = await db.user.update({
      where: { id },
      data: { name, email, profileImage, username },
    })
    return NextResponse.json(user)
  } catch (error) {
    console.log('Perfil error: ' + error)
    return new NextResponse('Ha ocurrido un error', { status: 500 })
  }
}
