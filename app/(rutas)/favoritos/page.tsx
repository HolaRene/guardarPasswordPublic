import DataTablaArticulos from '@/components/shared/DataTablaArticulos/DataTablaArticulos'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function FavoritosPage() {
  const sesion = await getServerSession()
  if (!sesion || !sesion.user?.email) {
    return redirect('/')
  }
  const user = await db.user.findUnique({
    where: { email: sesion.user.email },
    include: {
      elements: {
        where: { isFavorite: true },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  })
  if (!user || !user.elements) {
    return <div>No tienes favoritos</div>
  }

  return (
    <div>
      <h1 className='text-xl md:text-3xl font-semibold'>Lista de favoritos</h1>
      <DataTablaArticulos element={user.elements} />
    </div>
  )
}
