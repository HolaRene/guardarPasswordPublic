import React from 'react'
import { UserGeneratorProps } from './UserGenerator.types'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function UserGenerator(props: UserGeneratorProps) {
  const { setUserTypeSelected } = props
  return (
    <div className='p-4 bg-slate-100 rounded-md shadow-md'>
      <p>¿Qué quieres generar?</p>
      <RadioGroup
        defaultValue='username'
        onValueChange={valor => setUserTypeSelected(valor)}
      >
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='username' id='r2' />
          <label htmlFor='r2'>Usuario</label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='email' id='r1' />
          <label htmlFor='r1'>Email</label>
        </div>
      </RadioGroup>
    </div>
  )
}
