import { cadastrarUsuario } from './_actions'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

const Signup = () => {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600 drop-shadow-sm'>
            Crie sua conta
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form action={cadastrarUsuario} className='space-y-6'>
            <div>
              <Input
                type='text'
                label='Nome'
                name='nome'
                placeholder='Nome e sobrenome'
              />
            </div>

            <div>
              <Input
                type='email'
                label='Email'
                name='email'
                placeholder='email@provedor.com'
              />
            </div>

            <div>
              <Input type='password' label='Senha' name='senha' required />
            </div>

            <div>
              <Button type='submit' variant='primary' fullWidth>
                Criar conta
              </Button>
            </div>
          </form>

          <p className='mx-auto mb-2 mt-10 w-full text-center text-sm text-gray-500 '>
            Já é membro?
          </p>

          <Button href='login' fullWidth>
            Acesse sua conta
          </Button>
        </div>
      </div>
    </>
  )
}

export default Signup
