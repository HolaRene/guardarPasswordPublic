export const crearCustomPassword = (
  longitud: number,
  mayus: boolean,
  minus: boolean,
  numero: boolean,
  characterSpecial: boolean
) => {
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  const numeros = '0123456789'
  const caracteresEspeciales = '!@#$%^&*(),./@@?&;=:~!$'

  let charset = ''
  if (mayus) charset += mayusculas
  if (minus) charset += minusculas
  if (numero) charset += numeros
  if (characterSpecial) charset += caracteresEspeciales

  let password = ''
  if (mayus)
    password += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length))
  if (minus)
    password += minusculas.charAt(Math.floor(Math.random() * minusculas.length))
  if (numero)
    password += numeros.charAt(Math.floor(Math.random() * numeros.length))
  if (characterSpecial)
    password += caracteresEspeciales.charAt(
      Math.floor(Math.random() * caracteresEspeciales.length)
    )

  for (let i = password.length; i < longitud; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
  return password
}
