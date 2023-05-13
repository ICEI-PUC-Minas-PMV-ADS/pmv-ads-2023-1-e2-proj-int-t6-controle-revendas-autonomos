import { List } from '@/components/List'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const ListaDeFornecedores = ({ fornecedores }) => (
  <List>
    {fornecedores.map(({ codigo, nome }) => (
      <li key={codigo}>
        <Link
          href={`/estoque/fornecedores/${codigo}`}
          className='relative flex justify-between px-4 py-5 gap-x-6 hover:bg-gray-50 sm:px-6'
        >
          <div className='flex-auto min-w-0'>
            <p className='text-sm font-semibold leading-6 text-gray-700'>
              <span className='absolute inset-x-0 bottom-0 -top-px' />
              {nome}
            </p>
          </div>
          <div className='flex items-center gap-x-4'>
            <ChevronRightIcon className='flex-none w-5 h-5 text-gray-400' />
          </div>
        </Link>
      </li>
    ))}
  </List>
)
