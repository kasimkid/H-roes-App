import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {

  console.log('Prueba')
  return (

    <AuthProvider>
        
        <AppRouter/>
      
    </AuthProvider>

  )
}
