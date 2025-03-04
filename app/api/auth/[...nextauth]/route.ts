import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { compare } from 'bcrypt'
import { db } from '@/lib/db'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide both email and password')
        }
        // Buscamos al usuario en la base de datos.
        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        // Si el usuarios no existe o no tiene contraseña hasheada, lanzamos una excepción.
        if (!user || !user?.hashedPassword) {
          throw new Error('User not found')
        }
        // Comparamos la contraseña ingresada con la contraseña hasheada en la base de datos.
        const isValidPassword = await compare(
          credentials.password,
          user.hashedPassword
        )
        if (!isValidPassword) {
          throw new Error('Invalid password')
        }
        return user
      },
    }),
  ],
})

export { handler as GET, handler as POST }
