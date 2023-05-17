import { ListaDeProdutos } from './ListaProdutos'
import { listar as getProdutos } from '@/back-end/produtos'
import { buscarId } from '@/back-end/usuarios'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PlusIcon } from '@heroicons/react/20/solid'
import { FolderPlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const revalidate = 1

export default async function Produtos() {
  const usuario = await buscarId()
  const produtos = await getProdutos(usuario)

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
      className='relative block w-full rounded-xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:ring-offset-2'
    >
      <FolderPlusIcon className='mx-auto h-12 w-12 text-gray-400' />
      <span className='mt-2 block text-sm font-semibold text-gray-600'>
        Você ainda não tem produtos cadastrados
        <br />
      </span>
      <span className='mt-2 block text-xs font-semibold text-gray-500'>
        Clique aqui para cadastrar o primeiro
      </span>
    </button>
  </Link>
)
