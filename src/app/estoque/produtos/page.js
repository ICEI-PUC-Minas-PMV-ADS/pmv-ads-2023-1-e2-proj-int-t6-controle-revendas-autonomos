import { listar as getProdutos } from '@/back-end/produtos'
import { PlusIcon } from '@heroicons/react/20/solid'
import { FolderPlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ListaDeProdutos } from './ListaProdutos'
import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/Button'

export const revalidate = 1

export default async function Produtos() {
  const produtos = await getProdutos()

  return (
    <>
      {produtos.length > 0 ? (
        <>
          <PageHeader title='Produtos'>
            <Button variant='primary' href='estoque/produtos/novo'>
              <PlusIcon className='-ml-0.5 h-5 w-5' />
              Cadastrar produto
            </Button>
          </PageHeader>

          <div className='mt-12'>
            <ListaDeProdutos produtos={produtos} />
          </div>
        </>
      ) : (
        <EstadoVazio />
      )}
    </>
  )
}

const EstadoVazio = () => (
  <Link href='/estoque/produtos/novo'>
    <button
      type='button'
      className='relative block w-full p-12 text-center border-2 border-gray-300 border-dashed rounded-xl hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300/50'
    >
      <FolderPlusIcon className='w-12 h-12 mx-auto text-gray-400' />
      <span className='block mt-2 text-sm font-semibold text-gray-600'>
        Você ainda não tem produtos cadastrados
        <br />
      </span>
      <span className='block mt-2 text-xs font-semibold text-gray-500'>
        Clique aqui para cadastrar o primeiro
      </span>
    </button>
  </Link>
)
