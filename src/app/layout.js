import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Session as SessionProvider } from '@/components/SessionProvider'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Controle de Estoque',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html
      className='h-full subpixel-antialiased bg-white scroll-smooth'
      lang='pt-BR'
    >
      <body className={'h-full ' + inter.className}>
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
