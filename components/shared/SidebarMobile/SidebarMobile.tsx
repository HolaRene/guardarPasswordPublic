import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import SidebarRutas from '../SidebarRutas/SidebarRutas'

export default function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className='bg-blue-800 text-white'>
        <SheetHeader className='text-left mb-5'>
          <SheetTitle className='text-white'>DonJoe - Contraseña.</SheetTitle>
          <SheetDescription className='text-slate-100'>
            Crea tus contraseñas seguras, rapidas y facil.
          </SheetDescription>
        </SheetHeader>
        <SidebarRutas />
      </SheetContent>
    </Sheet>
  )
}
