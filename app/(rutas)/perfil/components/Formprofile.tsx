'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProfileProps } from './Formprofile.types'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from './Formprofile.form'
import Image from 'next/image'
import { useState } from 'react'
import { UploadButton } from '@/lib/uploadthing'
import { Upload } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Formprofile(props: FormProfileProps) {
  const [mostrarSubirFoto, setMostrarSubirFoto] = useState(false)
  const [mostrarFotoSubida, setMostrarFotoSubida] = useState(false)
  const { toast } = useToast()
  const rutas = useRouter()
  const { user } = props
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user.username ?? '',
      email: user.email ?? '',
      id: user.id,
      name: user.name ?? '',
      profileImage: user.profileImage ?? '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch('api/profile', values)
      toast({
        title: 'Información actualizada correctamente',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      })
      rutas.refresh()
      setMostrarSubirFoto(false)
      setMostrarFotoSubida(false)
    } catch (error) {
      console.log('error', error)
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      })
    }
  }

  return (
    <div className='max-w-lg'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='profileImage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen de perfil</FormLabel>
                <FormControl>
                  <div>
                    <div className='flex gap-2 items-center'>
                      <Image
                        src={
                          user.profileImage
                            ? user.profileImage
                            : '/images/user.png'
                        }
                        alt='Usuario'
                        width={90}
                        height={90}
                        className='rounded-full'
                      />
                      <div className='w-[200px]'>
                        {mostrarSubirFoto ? (
                          <UploadButton
                            className='rounded-md text-slate-800 bg-slate-200 mt-3'
                            {...field}
                            endpoint={'profileImage'}
                            onClientUploadComplete={res => {
                              form.setValue('profileImage', res?.[0].url)
                              setMostrarFotoSubida(true)
                            }}
                            onUploadError={(error: Error) => {
                              console.log(error)
                              setMostrarSubirFoto(false)
                            }}
                          />
                        ) : (
                          <Button
                            onClick={() => setMostrarSubirFoto(prev => !prev)}
                          >
                            <Upload className='mr-2 w-4 h-4' />
                            Subir imagen
                          </Button>
                        )}
                      </div>
                    </div>
                    {mostrarFotoSubida && (
                      <p className='text-sm'>Imagen subida</p>
                    )}
                  </div>
                </FormControl>
                <FormDescription>Imagen para tu perfil</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder='death' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder='@death' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Guardar</Button>
        </form>
      </Form>
    </div>
  )
}
