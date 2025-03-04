import React from 'react'
import { PasswordGeneratorProps } from './PasswordGenerator.types'
import { Checkbox } from '@/components/ui/checkbox'

export default function PasswordGenerator(props: PasswordGeneratorProps) {
  const {
    isMayusSelected,
    isMinusSelected,
    isNumberSelected,
    isSpecialCharacter,
    lengthPassword,
    setIsMayusSelected,
    setIsMinusSelected,
    setIsNumberSelected,
    setIsSpecialCharacter,
    setLenth,
  } = props
  const handleRangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLenth(Number(event.target.value))
  }
  return (
    <div>
      <>
        <div className='w-full p-4 bg-slate-100 rounded-md shadow-md flex gap-2 items-center'>
          <label className='block text-sm font-medium text-gray-700 min-w-32'>
            Longitud : {lengthPassword}
          </label>
          <input
            type='range'
            id='rango'
            min={8}
            max={50}
            className='w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer'
            value={lengthPassword}
            onChange={handleRangePassword}
          />
        </div>

        <div>
          <div className='flex items-center space-x-2 bg-slate-100 rounded-md shadow-md p-3 my-4'>
            <Checkbox
              id='mayus'
              checked={isMayusSelected}
              onCheckedChange={() => setIsMayusSelected(prev => !prev)}
            />
            <label
              htmlFor='mayus'
              className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-65'
            >
              Mayúsculas: A - Z
            </label>
          </div>
          <div className='flex items-center space-x-2 bg-slate-100 rounded-md shadow-md p-3 my-4'>
            <Checkbox
              id='minus'
              checked={isMinusSelected}
              onCheckedChange={() => setIsMinusSelected(prev => !prev)}
            />
            <label
              htmlFor='minus'
              className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-65'
            >
              Minúsculas: a - z
            </label>
          </div>
          <div className='flex items-center space-x-2 bg-slate-100 rounded-md shadow-md p-3 my-4'>
            <Checkbox
              id='numeros'
              checked={isNumberSelected}
              onCheckedChange={() => setIsNumberSelected(prev => !prev)}
            />
            <label
              htmlFor='numeros'
              className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-65'
            >
              Números: 1 - 8
            </label>
          </div>
          <div className='flex items-center space-x-2 bg-slate-100 rounded-md shadow-md p-3 my-4'>
            <Checkbox
              id='character'
              checked={isSpecialCharacter}
              onCheckedChange={() => setIsSpecialCharacter(prev => !prev)}
            />
            <label
              htmlFor='character'
              className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-65'
            >
              Carácteres: !@#$%^&...
            </label>
          </div>
        </div>
      </>
    </div>
  )
}
