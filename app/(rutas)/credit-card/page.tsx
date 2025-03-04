import DataTablaArticulos from '@/components/shared/DataTablaArticulos/DataTablaArticulos'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
  const sesion = await getServerSession()
  if (!sesion || !sesion.user?.email) {
    return redirect('/')
  }
  const user = await db.user.findUnique({
    where: { email: sesion.user.email },
    include: {
      elements: {
        where: {
          typeElement: 'Tarjeta',
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  })
  //   console.log(user)
  if (!user || !user.elements) {
    return redirect('/')
  }
  return (
    <div>
      <h1 className='text-xl md:text-3xl font-semibold'>Tarjeta</h1>
      <DataTablaArticulos element={user.elements} />
    </div>
  )
}
