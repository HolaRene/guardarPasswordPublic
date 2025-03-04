import { Dispatch, SetStateAction } from 'react'

export type PasswordGeneratorProps = {
  setLenth: Dispatch<SetStateAction<number>>
  setIsMayusSelected: Dispatch<SetStateAction<boolean>>
  setIsMinusSelected: Dispatch<SetStateAction<boolean>>
  setIsNumberSelected: Dispatch<SetStateAction<boolean>>
  setIsSpecialCharacter: Dispatch<SetStateAction<boolean>>
  lengthPassword: number
  isSpecialCharacter: boolean
  isMayusSelected: boolean
  isMinusSelected: boolean
  isNumberSelected: boolean
}
