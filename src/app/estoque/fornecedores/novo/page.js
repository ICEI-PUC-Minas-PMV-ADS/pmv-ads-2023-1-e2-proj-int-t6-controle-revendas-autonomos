import { headers } from 'next/headers'
import { cadastrarFornecedor } from '../_actions'
import { Button } from '@/components/Button'

export default function NovoFornecedor() {
  const headersList = headers()
  const referer = headersList.get('referer')

  return (
    <form action={cadastrarFornecedor}>
      <input hidden name='referer' value={referer} />

      <div className='max-w-2xl px-4 mx-auto sm:px-6 lg:px-8'>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          Novo Fornecedor
        </h2>
        <p className='mt-1 text-sm leading-6 text-gray-600'>
          Cadastre um novo fornecedor
        </p>

        <div className='pb-12 border-b border-gray-900/10'>
          <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-6'>
              <label
                htmlFor='nome'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Nome
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='nome'
                  id='nome'
                  required
                  className={`bg-gray-50 shadow-sm block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300/50 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end px-4 sm:px-0'>
          <div className='flex items-center justify-end mt-6 gap-x-6'>
            <Button href={referer}>Cancelar</Button>
            <Button type='submit'>Salvar</Button>
          </div>
        </div>
      </div>
    </form>
  )
}
