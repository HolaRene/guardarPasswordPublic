import { Folder, KeyRound } from 'lucide-react'
import { DataHeaderMainItemProps } from './HeaderMain.types'

export const datosdeCabeceraPrincipal: DataHeaderMainItemProps[] = [
  {
    icon: KeyRound,
    texto: 'Elemento',
    typeElement: 'password',
  },
  {
    icon: Folder,
    texto: 'Carpeta',
    typeElement: 'folder',
  },
]
