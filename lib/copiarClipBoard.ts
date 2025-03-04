import { toast } from '@/hooks/use-toast'

export const copiarClipBoard = (valor: string) => {
  navigator.clipboard.writeText(valor)
  toast({ title: '¡Copiado✔!' })
}
