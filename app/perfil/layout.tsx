import type { Metadata } from 'next'
import { Bitter } from 'next/font/google'

const geistPoppins = Bitter({
  subsets: ['latin'],
  weight: ['200', '300', '500', '800'],
})

export const metadata: Metadata = {
  title: 'DonJoe,Perfil',
  description: 'Crear, guardar tus contraseña',
  keywords: ['password', 'safe', 'manager', 'donjoe'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistPoppins.className}`}>
        <h1>Perfil</h1>
        {children}
      </body>
    </html>
  )
}
