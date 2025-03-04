import React from 'react'
import { UserGeneratorProps } from './UserGenerator.types'

export default function UserGenerator(props: UserGeneratorProps) {
  const { setUserTypeSelected } = props
  return (
    <div className='p-4 bg-slate-100 rounded-md shadow-md'>
      <p>¿Qué quieres generar?</p>
    </div>
  )
}
