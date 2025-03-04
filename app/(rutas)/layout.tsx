import Logo from '@/components/shared/Logo/Logo'
import Sidebar from '@/components/shared/Sidebar/Sidebar'
import SidebarMobile from '@/components/shared/SidebarMobile/SidebarMobile'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const getPoppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '500', '800'],
})

export const metadata: Metadata = {
  title: 'DonJoe',
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
    <main className={`h-full ${getPoppins.className}`}>
      <div className='flex justify-between lg:hidden px-6 py-3 items-center bg-blue-600'>
        <div className='py-1 text-white'>
          <Logo />
        </div>
        <SidebarMobile />
      </div>
      <div className='flex h-full'>
        <div className='max-w-lg hidden lg:flex h-full w-72 flex-col bg-blue-800 px-4 text-white fixed'>
          <Sidebar />
        </div>
        <div className='w-full lg:pl-72'>
          <div className='p-6'>{children}</div>
        </div>
      </div>
    </main>
  )
}
