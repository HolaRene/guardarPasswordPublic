import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const geistPoppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '500', '800'],
})

export const metadata: Metadata = {
  title: 'DonJoe, Guarda tus contraseña',
  description: 'Crear, guardar tus contraseña',
  keywords: ['password', 'safe', 'manager', 'donjoe'],
  icons: {
    icon: '/joe.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistPoppins.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
