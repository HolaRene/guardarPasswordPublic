import { crearRamdonUser } from './crearRamdonUser'

export const crearRamdonEmail = () => {
  const dominios = [
    'gmail.com',
    'hotmail.com',
    'outlook.com',
    'yahoo.com',
    'outlook.es',
    'hotmail.es',
    'yahoo.es',
    'outlook.com.mx',
    'hotmail.com.mx',
    'yahoo.com.mx',
  ]
  const username = crearRamdonUser(8)
  const dominio = dominios[Math.floor(Math.random() * dominios.length)]
  return `${username}@${dominio}`
}
