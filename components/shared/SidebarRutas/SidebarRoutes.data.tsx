import {
  CreditCard,
  Earth,
  Landmark,
  LayoutList,
  Lock,
  Settings,
  Star,
  UserPen,
} from 'lucide-react'

export const datosdeElementosBarraLateral = [
  {
    titulo: 'Elementos',
    icono: LayoutList,
    hijos: [
      {
        titulo: 'Credit Card',
        icono: CreditCard,
        ruta: '/credit-card',
      },
      {
        titulo: 'Logins',
        icono: Earth,
        ruta: '/login-elements',
      },
      {
        titulo: 'Favoritos',
        icono: Star,
        ruta: '/favoritos',
      },
    ],
  },
]

export const datosdeBarraLateralConfiguracion = [
  {
    titulo: 'Ajustes',
    icono: Settings,
    hijos: [
      {
        titulo: 'Seguridad',
        icono: Lock,
        ruta: '#',
        premium: true,
      },
      {
        titulo: 'Perfil',
        icono: UserPen,
        ruta: '/perfil',
        premium: false,
      },
      {
        titulo: 'Suscripcion',
        icono: Landmark,
        ruta: '#',
        premium: true,
      },
    ],
  },
]
