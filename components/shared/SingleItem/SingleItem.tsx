import Link from 'next/link'
import React from 'react'
import { SingleItemProps } from './SingleItems.types'

export default function SingleItem(props: SingleItemProps) {
  return (
    <Link
      href={props.href}
      className='flex gap-2 items-center p-2 hover:bg-blue-100/20 duration-300  transition-all rounded-md'
      onClick={props.onClick}
    >
      <div className='bg-blue-100/20 py-2 rounded-md'>
        <props.icon size={20} />
      </div>
      {props.label}
    </Link>
  )
}
