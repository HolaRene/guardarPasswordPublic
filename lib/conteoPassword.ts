import { Element } from '@prisma/client'

export function countarPasswords(elements: Element[]) {
  const passwordCounts = new Map<string, number>()

  elements.forEach(element => {
    const password = element.password?.trim() // Remueve espacios extra y chequea si existe
    if (password) {
      passwordCounts.set(password, (passwordCounts.get(password) ?? 0) + 1)
    }
  })

  let uniquePasswordCount = 0
  let repeatedPasswordsCount = 0

  passwordCounts.forEach(count => {
    if (count === 1) {
      uniquePasswordCount++ // Si solo aparece una vez, es única
    } else {
      repeatedPasswordsCount += count // Aquí sumamos todas las repetidas correctamente
    }
  })

  console.log('Total contraseñas esperadas:', elements.length)
  console.log(
    'Total contraseñas contadas:',
    uniquePasswordCount + repeatedPasswordsCount
  )
  console.log('Únicas:', uniquePasswordCount)
  console.log('Repetidas:', repeatedPasswordsCount)

  return {
    unica: uniquePasswordCount,
    repetida: repeatedPasswordsCount,
  }
}
