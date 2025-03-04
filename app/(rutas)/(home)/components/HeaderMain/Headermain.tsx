'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ChevronDown } from 'lucide-react'
import { datosdeCabeceraPrincipal } from './headerMain.data'
import { useState } from 'react'
import FormAddElemento from '../FormAddElemento/FormAddElemento'
import { HeaderMainProps } from './HeaderMain.types'
const HaederMain = (props: HeaderMainProps) => {
  const { userId } = props
  const [tipoElemento, setTipoElemento] = useState<'password' | 'folder' | ''>()
  const [abrirDialog, setAbrirDialog] = useState(false)
  const [abrirDropDown, setAbrirDropDown] = useState(false)
  const cerrarDialogoyDropdown = () => {
    setAbrirDialog(false)
    setAbrirDropDown(false)
  }
  return (
    <div className='flex justify-between items-centere'>
      <h1 className='text-xl font-semibold md:text-3xl '>
        Todas las cajas fuertes
      </h1>
      <Dialog open={abrirDialog} onOpenChange={setAbrirDialog}>
        <DropdownMenu open={abrirDropDown} onOpenChange={setAbrirDropDown}>
          <DropdownMenuTrigger asChild>
            <Button>
              Nuevo <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='p-0'>
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className='flex flex-col'>
                  {datosdeCabeceraPrincipal.map(
                    ({ icon: Icon, texto, typeElement }) => (
                      <Button
                        key={typeElement}
                        className='justify-start'
                        variant={'ghost'}
                        onClick={() => setTipoElemento(typeElement)}
                      >
                        <Icon className='h-4 w-4 mr-2' />
                        {texto}
                      </Button>
                    )
                  )}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className='sm:max-w-[825px]'>
          <DialogHeader>
            <DialogTitle>Nuevo registro</DialogTitle>
          </DialogHeader>
          {tipoElemento === 'password' && (
            <FormAddElemento
              userId={userId}
              cerrarDialogDropDown={cerrarDialogoyDropdown}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default HaederMain
