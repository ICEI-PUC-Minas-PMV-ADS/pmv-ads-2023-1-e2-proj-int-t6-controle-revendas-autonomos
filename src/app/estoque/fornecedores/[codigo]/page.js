import { ListaDeProdutos } from '../../produtos/ListaProdutos'
import { atualizarFornecedor } from '../_actions'
import { ButtonExcluirFornecedor } from './ButtonExcluirFornecedor'
import { buscarPorCodigo } from '@/back-end/fornecedores'
import { buscarPorFornecedor } from '@/back-end/produtos'
import { Button } from '@/components/Button'
import { DetailPage } from '@/components/DetailPage'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function EditarFornecedor({ params }) {
  const { codigo } = params

  let dados = await buscarPorCodigo(codigo)
  let produtosDoFornecedor = await buscarPorFornecedor(codigo)

  return (
    <>
      <DetailPage
        title={`Editar Fornecedor ${codigo}`}
        subtitle={'Altere os dados do fornecedor'}
      >
        <form action={atualizarFornecedor}>
          <input type='hidden' name='codigo' value={codigo} />

          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
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
                    className={`block w-full rounded-xl border-0 bg-gray-50 py-1.5 text-gray-900 shadow-sm shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300/50 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-end px-4 sm:px-0'>
              <div className='-mt-px flex w-0 flex-1'>
                <ButtonExcluirFornecedor codigo={codigo} />
              </div>
              <div className='mt-6 flex items-center justify-end gap-x-6'>
                <Link href='/estoque/fornecedores'>
                  <Button type='button'>Cancelar</Button>
                </Link>
                <Button type='submit' variant='primary'>
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </DetailPage>

      <div className='mt-4'>
        <DetailPage title='Produtos do fornecedor'>
          <div className='mt-4'>
            <ListaDeProdutos produtos={produtosDoFornecedor} />
          </div>
        </DetailPage>
      </div>
    </>
  )
}
