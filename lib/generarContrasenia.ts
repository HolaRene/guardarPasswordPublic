export const generarPassword = (longitud = 12): string => {
  const caracters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]0123456789'
  let password = ''
  for (let i = 0, n = caracters.length; i < longitud; ++i) {
    password += caracters.charAt(Math.floor(Math.random() * n))
  }
  return password
}
