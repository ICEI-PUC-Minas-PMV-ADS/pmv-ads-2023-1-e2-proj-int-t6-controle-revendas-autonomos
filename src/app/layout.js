import './globals.css'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Session as SessionProvider } from '@/components/SessionProvider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Controle de Estoque',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html
      className='h-full scroll-smooth bg-white subpixel-antialiased'
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
