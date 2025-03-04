import React from 'react'
import { DataTableArticulosProps } from './DataTableArticulos.types'
import { DataTable } from './data-table'
import { columns } from './columns'

export default function DataTablaArticulos(props: DataTableArticulosProps) {
  const { element } = props

  return (
    <div className='py-10'>
      <DataTable columns={columns} data={element} />
    </div>
  )
}
