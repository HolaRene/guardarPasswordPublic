'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { toast } from '@/hooks/use-toast'
import { copiarClipBoard } from '@/lib/copiarClipBoard'
import { Element } from '@prisma/client'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { Copy, MoreHorizontal, User } from 'lucide-react'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type ColumnsProps = Element

export const columns: ColumnDef<ColumnsProps>[] = [
  {
    accessorKey: 'name',
    header: 'Nombre',
  },
  {
    accessorKey: 'typeElement',
    header: 'Tipo de Elemento',
  },
  {
    accessorKey: 'urlWebsite',
    header: 'URL del Sitio Web',
  },
  {
    accessorKey: 'directory',
    header: 'Directorio',
  },
  {
    accessorKey: 'actions',
    header: 'Acciones',
    cell: ({ row }) => {
      const password = row.original.password
      const username = row.original.username
      const onEditElement = () => {
        window.location.href = `/elemento/${row.original.id}`
      }
      const copyElement = (items: string, nombre: string) => {
        copiarClipBoard(items)
        toast({ title: `Copiadando ${nombre} a tu clipboard ✔` })
      }

      return (
        <div className='flex justify-center gap-2 items-center'>
          {password && (
            <Copy
              className='w-4 h-4 cursor-pointer'
              onClick={() => copyElement(password, 'Contraseña')}
            />
          )}
          {username && (
            <User
              className='w-4 h-4 cursor-pointer'
              onClick={() => copyElement(username, 'Username')}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'} className='p-0 w-8 h-8'>
                <span className='sr-only'>Abrir Menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem onClick={onEditElement}>
                Editar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
