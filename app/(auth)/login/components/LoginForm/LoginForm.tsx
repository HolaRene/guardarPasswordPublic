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
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const rutas = useRouter()
  const { toast } = useToast()

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })
    if (response?.status === 200) {
      rutas.push('/')
      toast({ title: 'Bienvenido😎🐱‍👤' })
    } else {
      toast({ title: 'Error al iniciar sesión', variant: 'destructive' })
    }
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-3 w-full mt-5 text-black'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='correo@correo.com' {...field} />
              </FormControl>
              <FormDescription>Ingresa tu correo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='contraseña' {...field} type='password' />
              </FormControl>
              <FormDescription>Ingresa tu contraseña</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Iniciar sesión
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
