import { buscarPorCodigo } from '@/back-end/fornecedores'
import { buscarPorFornecedor } from '@/back-end/produtos'
import Link from 'next/link'
import { ListaDeProdutos } from '../../produtos/ListaProdutos'
import { atualizarFornecedor } from '../_actions'
import { ButtonExcluirFornecedor } from './ButtonExcluirFornecedor'

export const dynamic = 'force-dynamic'

export default async function EditarFornecedor({ params }) {
  const { codigo } = params

  let dados = await buscarPorCodigo(codigo)
  let produtosDoFornecedor = await buscarPorFornecedor(codigo)

  return (
    <>
      <form action={atualizarFornecedor}>
        <input type='hidden' name='codigo' value={codigo}></input>
        <div className='max-w-2xl px-4 mx-auto sm:px-6 lg:px-8'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Editar Fornecedor {codigo}
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Altere os dados do fornecedor
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
                    defaultValue={dados?.nome}
                    className={`bg-gray-50 shadow-sm block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300/50 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-end px-4 sm:px-0'>
            <div className='flex flex-1 w-0 -mt-px'>
              <ButtonExcluirFornecedor codigo={codigo} />
            </div>
            <div className='flex items-center justify-end mt-6 gap-x-6'>
              <Link href='/estoque/fornecedores'>
                <button
                  type='button'
                  className='px-3 py-2 text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-50 rounded-xl'
                >
                  Cancelar
                </button>
              </Link>
              <button
                type='submit'
                className='px-3 py-2 text-sm font-semibold shadow-sm text-amber-600 bg-amber-100 rounded-xl hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600'
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className='max-w-2xl px-4 mx-auto mt-16 sm:px-6 lg:px-8'>
        <div className='mb-8 '>
          <h2 className='mt-16 text-base font-semibold leading-7 text-gray-900'>
            Produtos do fornecedor
          </h2>
        </div>
        <ListaDeProdutos produtos={produtosDoFornecedor} />
      </div>
    </>
  )
}
