import { List } from '@/components/List'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const ListaDeProdutos = ({ produtos }) => (
  <List>
    {produtos.map(
      ({ codigo, nome, nome_fornecedor, preco, custo, quantidade }) => (
        <li key={codigo}>
          <Link
            key={codigo}
            href={`/estoque/produtos/${codigo}`}
            className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'
          >
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                <span className='absolute inset-x-0 -top-px bottom-0' />
                {nome}
              </p>
              <p className='mt-1 flex text-xs leading-5 text-gray-500'>
                {nome_fornecedor}
              </p>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='flex flex-col items-end'>
                <p className='text-sm font-medium leading-6 text-gray-900'>
                  R$ {preco.toString().replace('.', ',')}
                </p>
                <p className='mt-1 text-xs leading-5 text-gray-500'>
                  {custo && `R$ ${custo.toString().replace('.', ',')}`}
                </p>
                <p className='mt-1 text-xs leading-5 text-gray-500'>
                  {quantidade} em estoque
                </p>
              </div>
              <ChevronRightIcon className='h-5 w-5 flex-none text-gray-400' />
            </div>
          </Link>
        </li>
      )
    )}
  </List>
)
