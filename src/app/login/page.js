'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const Signin = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/estoque'
  const contaCriada = searchParams.get('conta-criada') == 'true'

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
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          {contaCriada && (
            <p className='text-center text-sm font-semibold text-green-600'>
              Conta criada com sucesso!
            </p>
          )}
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600 drop-shadow-sm'>
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

          <p className='mx-auto mb-2 mt-10 w-full text-center text-sm text-gray-500 '>
            Ainda não é um membro?
          </p>

          <Button href='/signup' fullWidth>
            Crie sua conta!
          </Button>
        </div>
      </div>
    </>
  )
}

export default Signin
