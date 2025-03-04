import { z } from 'zod'

export const formSchema = z.object({
  typeElement: z
    .string()
    .min(2, {
      message: 'El typeElement must be at least 2 characters.',
    })
    .max(50),
  name: z
    .string()
    .min(2, {
      message: 'el name must be at least 2 characters.',
    })
    .max(50),
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50),
  password: z
    .string()
    .min(2, {
      message: 'password must be at least 2 characters.',
    })
    .max(50),
  urlWebsite: z
    .string()
    .min(2, {
      message: 'urlWebsite must be at least 2 characters.',
    })
    .max(50),
  directory: z
    .string()
    .min(2, {
      message: 'derictory must be at least 2 characters.',
    })
    .max(50),
  userId: z.string(),
  notas: z.string(),

  isFavorite: z.boolean().default(false),
})
