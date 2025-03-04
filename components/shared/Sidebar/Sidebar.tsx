import React from 'react'
import Logo from '../Logo/Logo'
import SidebarRutas from '../SidebarRutas/SidebarRutas'

export default function Sidebar() {
  return (
    <>
      <div className='py-6'>
        <Logo />
      </div>
      <SidebarRutas />
    </>
  )
}
