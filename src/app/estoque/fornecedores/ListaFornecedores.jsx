import { List } from '@/components/List'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const ListaDeFornecedores = ({ fornecedores }) => (
  <List>
    {fornecedores.map(({ codigo, nome }) => (
      <li key={codigo}>
        <Link
          href={`/estoque/fornecedores/${codigo}`}
          className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'
        >
          <div className='min-w-0 flex-auto'>
            <p className='text-sm font-semibold leading-6 text-gray-700'>
              <span className='absolute inset-x-0 -top-px bottom-0' />
              {nome}
            </p>
          </div>
          <div className='flex items-center gap-x-4'>
            <ChevronRightIcon className='h-5 w-5 flex-none text-gray-400' />
          </div>
        </Link>
      </li>
    ))}
  </List>
)
