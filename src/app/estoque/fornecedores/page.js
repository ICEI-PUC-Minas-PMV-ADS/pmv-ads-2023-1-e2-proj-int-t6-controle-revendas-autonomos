import { ListaDeFornecedores } from './ListaFornecedores'
import { listar as getFornecedores } from '@/back-end/fornecedores'
import { buscarId } from '@/back-end/usuarios'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PlusIcon } from '@heroicons/react/20/solid'
import { FolderPlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// export const revalidate = 1
export const dynamic = 'force-dynamic'

export default async function Fornecedores() {
  const usuario = await buscarId()
  const fornecedores = await getFornecedores(usuario)

  return (
    <>
      {fornecedores.length > 0 ? (
        <PaginaFornecedores fornecedores={fornecedores} />
      ) : (
        <EstadoVazio />
      )}
    </>
  )
}

const PaginaFornecedores = ({ fornecedores }) => (
  <>
    <PageHeader title='Fornecedores'>
      <div className='mt-4 flex md:ml-4 md:mt-0'>
        <Link href='estoque/fornecedores/novo'>
          <Button type='button' variant='primary'>
            <PlusIcon className='-ml-0.5 h-5 w-5' />
            Cadastrar fornecedor
          </Button>
        </Link>
      </div>
    </PageHeader>

    <div className='mt-12'>
      <ListaDeFornecedores fornecedores={fornecedores} />
    </div>
  </>
)

const EstadoVazio = () => (
  <Link href='/estoque/fornecedores/novo'>
    <button
      type='button'
      className='relative block w-full rounded-xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:ring-offset-2'
    >
      <FolderPlusIcon className='mx-auto h-12 w-12 text-gray-400' />
      <span className='mt-2 block text-sm font-semibold text-gray-600'>
        Você ainda não tem fornecedores cadastrados
        <br />
      </span>
      <span className='mt-2 block text-xs font-semibold text-gray-500'>
        Clique aqui para cadastrar o primeiro
      </span>
    </button>
  </Link>
)
