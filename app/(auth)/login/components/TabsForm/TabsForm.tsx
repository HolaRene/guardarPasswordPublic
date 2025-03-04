import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from '../LoginForm/LoginForm'
import RegistroForm from '../RegistroForm/RegistroForm'

export default function TabsForm() {
  return (
    <Tabs defaultValue='signin' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='signin'>Iniciar Sesión</TabsTrigger>
        <TabsTrigger value='signup'>Crear Cuenta</TabsTrigger>
      </TabsList>
      <TabsContent value='signin'>
        <Card>
          <CardContent className='space-y-2'>
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='signup'>
        <Card>
          <CardContent className='space-y-2'>
            <RegistroForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
