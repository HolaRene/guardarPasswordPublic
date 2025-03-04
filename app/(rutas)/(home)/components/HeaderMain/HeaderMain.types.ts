type TipoELemento = '' | 'password' | 'folder'

export type DataHeaderMainItemProps = {
  icon: React.ComponentType<{ className?: string }>
  typeElement: TipoELemento
  texto: string
}

export type HeaderMainProps = {
  userId: string
}
