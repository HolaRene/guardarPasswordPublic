'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BarChart, DoorClosed, House, RectangleEllipsis } from 'lucide-react'
import Link from 'next/link'
import SingleItem from '../SingleItem/SingleItem'
import {
  datosdeBarraLateralConfiguracion,
  datosdeElementosBarraLateral,
} from './SidebarRoutes.data'
import { signOut } from 'next-auth/react'

export default function SidebarRutas() {
  return (
    <div>
      <SingleItem href='/' icon={House} label='Inicio' />

      {datosdeElementosBarraLateral.map(({ hijos, icono: Icon, titulo }) => (
        <Accordion
          type='single'
          collapsible
          key={titulo}
          className='w-full px-2'
        >
          <AccordionItem value='item-1' className='border-b-0'>
            <AccordionTrigger>
              <div className='flex gap-2 items-center'>
                <div className='bg-blue-100/20 p-2 rounded-md'>
                  <Icon size={20} />
                </div>
                {titulo}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {hijos.map(({ icono: Icon, ruta, titulo }) => (
                <div key={titulo}>
                  <Link
                    href={ruta}
                    className='px-6 flex gap-2 py-2 items-center hover:bg-blue-100/25 duration-500 transition-all rounded-md'
                  >
                    <Icon size={21} />
                    {titulo}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <SingleItem href='/generador' label='Generar' icon={RectangleEllipsis} />
      {datosdeBarraLateralConfiguracion.map(
        ({ hijos, icono: Icon, titulo }) => (
          <Accordion
            type='single'
            collapsible
            key={titulo}
            className='w-full px-2'
          >
            <AccordionItem value='item-1' className='border-b-0'>
              <AccordionTrigger>
                <div className='flex gap-2 items-center'>
                  <div className='bg-blue-100/20 p-2 rounded-md'>
                    <Icon size={20} />
                  </div>
                  {titulo}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {hijos.map(({ icono: Icon, ruta, titulo, premium }) => (
                  <div
                    key={titulo}
                    className='flex items-center justify-between mt-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md pr-1'
                  >
                    <Link
                      href={ruta}
                      className='px-6 py-2 flex gap-2 items-center'
                    >
                      <Icon size={23} />
                      {titulo}
                    </Link>
                    {premium && (
                      <span className='flex gap2 text-xs px-2 py-1 bg-blue-400 rounded-md'>
                        Hay que pagar
                      </span>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      )}
      <SingleItem href='/analisis' label='Analisis' icon={BarChart} />
      <SingleItem
        href='#'
        onClick={() => signOut()}
        label='Cerrar Sesion'
        icon={DoorClosed}
      />
    </div>
  )
}
