import { Inter } from '@next/font/google'
import AuthPage from './components/Authentification/AuthPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-gray-100'>
     <AuthPage />
    </div>
  )
}
