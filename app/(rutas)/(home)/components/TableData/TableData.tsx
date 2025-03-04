import { Element } from '@prisma/client'
import { columns } from './columns'
import { DataTable } from './data-table'

export type TableDataProps = {
  elements: Element[]
}
function TableData(props: TableDataProps) {
  return (
    <div className='py-10'>
      <DataTable columns={columns} data={props.elements} />
    </div>
  )
}

export default TableData
