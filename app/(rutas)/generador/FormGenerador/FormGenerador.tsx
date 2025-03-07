'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { copiarClipBoard } from '@/lib/copiarClipBoard'
import { Copy, Shuffle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import PasswordGenerator from './PasswordGenerator/PasswordGenerator'
import UserGenerator from './UserGenerador/UserGenerator'
import { crearCustomPassword } from '@/lib/crearCustomPassword'
import { crearRamdonUser } from '@/lib/crearRamdonUser'
import { crearRamdonEmail } from '@/lib/crearRamdonEmail'

export default function FormGenerador() {
  const [selectValor, setSelectValor] = useState<'password' | 'user' | string>(
    'password'
  )
  const [itemValorInput, setItemValorInput] = useState('')
  const [lengthPassword, setLengthPassword] = useState(11)
  const [userTypeSelected, setUserTypeSelected] = useState('username')
  const [isMayusSelected, setIsMayusSelected] = useState(true)
  const [isMinusSelected, setIsMinusSelected] = useState(true)
  const [isNumberSelected, setIsNumberSelected] = useState(true)
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(true)
  useEffect(() => {
    if (selectValor === 'password') {
      const newPassword = crearCustomPassword(
        lengthPassword,
        isMayusSelected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacter
      )
      setItemValorInput(newPassword)
    }
  }, [
    lengthPassword,
    isMayusSelected,
    isMinusSelected,
    isNumberSelected,
    isSpecialCharacter,
    selectValor,
  ])
  const handleShuffleClick = () => {
    if (selectValor === 'password') {
      const newPassword = crearCustomPassword(
        lengthPassword,
        isMayusSelected,
        isMinusSelected,
        isNumberSelected,
        isSpecialCharacter
      )
      setItemValorInput(newPassword)
    } else if (selectValor === 'user') {
      if (userTypeSelected === 'email') {
        const email = crearRamdonEmail()
        setItemValorInput(email)
      } else {
        const newUser = crearRamdonUser(10)
        setItemValorInput(newUser)
      }
    }
  }
  useEffect(() => {
    if (selectValor === 'user') {
      const newUser = crearRamdonUser()
      setItemValorInput(newUser)
    }
    if (userTypeSelected === 'email') {
      const email = crearRamdonEmail()
      setItemValorInput(email)
    }
  }, [selectValor, userTypeSelected])

  return (
    <div className='mt-5 max-w-2xl'>
      <div className='relative w-full'>
        <Input
          placeholder='crea tu contraseña'
          value={itemValorInput}
          onChange={() => console.log('ola')}
        />
        <Copy
          className='absolute top-2  right-12 w-5 h-5 cursor-pointer'
          onClick={() => copiarClipBoard(itemValorInput)}
        />
        <Shuffle
          className='absolute top-2 right-5 cursor-pointer w-5 h-5'
          onClick={handleShuffleClick}
        />
      </div>
      <div className='bg-slate-300 rounded-md shadow-md my-4 p-4'>
        <p className='mb-4 text-slate-500'>
          ¿Qué quieres generar una contraseña?
        </p>
        <RadioGroup
          defaultValue='password'
          onValueChange={value => setSelectValor(value)}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='password' id='r1' />
            <Label htmlFor='r1'>Contraseña</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='user' id='r2' />
            <Label htmlFor='r2'>Usuario</Label>
          </div>
        </RadioGroup>
      </div>
      {selectValor === 'password' ? (
        <PasswordGenerator
          isMayusSelected={isMayusSelected}
          isMinusSelected={isMinusSelected}
          isNumberSelected={isNumberSelected}
          lengthPassword={lengthPassword}
          setIsMayusSelected={setIsMayusSelected}
          setIsMinusSelected={setIsMinusSelected}
          setIsNumberSelected={setIsNumberSelected}
          setIsSpecialCharacter={setIsSpecialCharacter}
          isSpecialCharacter={isSpecialCharacter}
          setLenth={setLengthPassword}
        />
      ) : (
        <UserGenerator setUserTypeSelected={setUserTypeSelected} />
      )}
    </div>
  )
}
