'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const Signin = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const entrar = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const senha = event.target.password.value

    signIn('credentials', {
      email,
      senha,
      callbackUrl,
    })
  }

  return (
    <>
      <div className='flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-600 drop-shadow-sm'>
            Acesse sua conta
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={entrar}>
            <div>
              <Input
                type='email'
                label='Email'
                name='email'
                placeholder='email@provedor.com'
              />
            </div>

            <div>
              <Input type='password' label='Senha' name='password' required />
            </div>

            <div>
              <Button type='submit' variant='primary' fullWidth>
                Entrar
              </Button>
            </div>
          </form>

          <p className='w-full mx-auto mt-10 mb-2 text-sm text-center text-gray-500 '>
            Ainda não é um membro?
          </p>

          <Button href='#' fullWidth>
            Crie sua conta agora mesmo, é de graça!
          </Button>
        </div>
      </div>
    </>
  )
}

export default Signin
