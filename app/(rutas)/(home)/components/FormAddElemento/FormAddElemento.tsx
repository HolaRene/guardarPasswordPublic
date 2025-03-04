'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { formSchema } from './FormAddElemento.form'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Copy, Earth, Eye, Shuffle } from 'lucide-react'
import { copiarClipBoard } from '@/lib/copiarClipBoard'
import { useState } from 'react'
import { generarPassword } from '@/lib/generarContrasenia'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormAddElementProps } from './FormAddElement.type'

function FormAddElemento(props: FormAddElementProps) {
  const { userId, cerrarDialogDropDown } = props
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      isFavorite: false,
      directory: '',
      name: '',
      notas: '',
      password: '',
      typeElement: '',
      urlWebsite: '',
      userId,
    },
  })
  const rutas = useRouter()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/api/articulos', values)
      toast({ title: 'Elemento agregado correctamente' })
      form.reset({
        username: '',
        isFavorite: false,
        directory: '',
        name: '',
        notas: '',
        password: '',
        typeElement: '',
        urlWebsite: '',
      })
      cerrarDialogDropDown()
      rutas.refresh()
    } catch (error) {
      console.log(error)
      toast({
        title: 'Ha ocurrodo un error',
        variant: 'destructive',
      })
    }
  }
  const urlWebsite = () => {
    form.setValue('urlWebsite', window.location.href)
  }

  const generarRandomPassword = () => {
    const password = generarPassword()
    form.setValue('password', password)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='md:grid-cols-2 grid gap-y-2 gap-x-4   '
        >
          <FormField
            control={form.control}
            name='typeElement'
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Qué tipo de elemento necesitas?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecciona la direccion para tu contraseña' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Inicio de sesión'>
                      Inicio de sesión
                    </SelectItem>
                    <SelectItem value='Tarjeta'>Tarjeta</SelectItem>
                    <SelectItem value='Identidad'>Identidad</SelectItem>
                  </SelectContent>
                  <FormDescription>
                    Selecciona el tipo de elemento que deseas generar
                  </FormDescription>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='isFavorite'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Quieres seleccionar tu contraseña como favorita?
                </FormLabel>
                <div className='flex flex-row items-center space-x-3 space-y-0  p-4'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>Marcar como favorito</FormLabel>
                  </div>
                </div>
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
                  <Input
                    {...field}
                    type='text'
                    placeholder='Ingresa el nombre'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='directory'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Directorio</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecciona el directorio' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Social'>Social</SelectItem>
                    <SelectItem value='Artes'>Artes</SelectItem>
                    <SelectItem value='Comprar'>Comprar</SelectItem>
                  </SelectContent>
                  <FormDescription>
                    Selecciona el directorio para tu contraseña
                  </FormDescription>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      type='text'
                      placeholder='Ingresa tu nombre'
                    />
                    <Copy
                      className='absolute top-3 right-4 cursor-pointer'
                      size={15}
                      onClick={() => {
                        copiarClipBoard(field.value)
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='urlWebsite'
            render={({ field }) => (
              <FormItem>
                <FormLabel>url Website</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input {...field} type='text' placeholder='Direccion web' />
                    <Earth
                      size={18}
                      className='absolute top-3 cursor-pointer right-2 '
                      onClick={urlWebsite}
                    />
                  </div>
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Haz click en el icono para obtener la dirección web actual
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex justify-between'>
                  Contrasenia
                  <Shuffle
                    size={18}
                    className=' cursor-pointer'
                    onClick={generarRandomPassword}
                  />
                </FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      type={mostrarContrasenia ? 'text' : 'password'}
                      placeholder='Contrasenia'
                    />
                    <Eye
                      size={18}
                      className='absolute top-3 cursor-pointer right-10 '
                      onClick={() => setMostrarContrasenia(!mostrarContrasenia)}
                    />
                    <Copy
                      className='absolute top-3 right-2 cursor-pointer'
                      size={17}
                      onClick={() => copiarClipBoard(field.value)}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className='text-slate-400 flex items-center justify-between text-sm'>
              Autenticació TOTP
              <p className='px-3 bg-blue-600 text-white rounded-lg text-sm mr-1'>
                Premium
              </p>
            </div>
            <Input disabled placeholder='TOTP' />
          </div>
          <FormField
            control={form.control}
            name='notas'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notas</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder='Ingresa tus notas' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div></div>
          <Button type='submit'>Guardar</Button>
        </form>
      </Form>
    </div>
  )
}

export default FormAddElemento
