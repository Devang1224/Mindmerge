import Body from '@/components/body/Body'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen h-screen'>
       <Navbar/>
       <Body/>
    </div>
  )
}
