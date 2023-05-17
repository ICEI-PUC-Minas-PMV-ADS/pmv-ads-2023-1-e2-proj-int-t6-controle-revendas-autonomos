'use client'

import { Input } from '@/components/Input'
import { Spinner } from '@/components/Spinner'
import { classNames } from '@/utils/class-names'
import { Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import useSWR from 'swr'

const FornecedorCombobox = ({ codigo }) => {
  const [termoBusca, setTermoBusca] = useState('')
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(codigo)

  const {
    data: fornecedores,
    error,
    isLoading,
  } = useSWR('/api/fornecedores/', fetcher)

  const fornecedoresFiltrados =
    termoBusca === '' && fornecedores
      ? fornecedores
      : fornecedores?.filter(({ codigo, nome }) =>
          `${codigo} ${nome}`
            .toLowerCase()
            .includes(termoBusca.trim().toLowerCase())
        )

  const nomeFornecedorSelecionado =
    fornecedores && fornecedorSelecionado > 0
      ? fornecedores.find(
          (fornecedor) => fornecedor.codigo === fornecedorSelecionado
        ).nome
      : ''

  return (
    <>
      <Label />

      {error && <Erro />}

      {isLoading && <Carregando />}

      {!error && !isLoading && (
        <Combobox
          as='div'
          name='fornecedor'
          value={fornecedorSelecionado}
          onChange={setFornecedorSelecionado}
        >
          <div className='relative mt-2'>
            <Combobox.Input
              className='w-full rounded-xl border-0  bg-gray-50 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-100 drop-shadow-sm focus:ring-2 focus:ring-inset focus:ring-amber-300/50 sm:text-sm sm:leading-6'
              onChange={(event) => setTermoBusca(event.target.value)}
              displayValue={(fornecedor) => nomeFornecedorSelecionado}
            />

            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
              <ChevronUpDownIcon className='h-5 w-5 text-gray-400' />
            </Combobox.Button>

            {fornecedoresFiltrados?.length > 0 && (
              <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base ring-1 ring-black ring-opacity-5 drop-shadow-lg focus:outline-none sm:text-sm'>
                {fornecedoresFiltrados.map(({ codigo, nome }) => (
                  <Combobox.Option
                    key={codigo}
                    value={codigo}
                    className={({ active }) =>
                      classNames(
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                        active ? 'bg-amber-100 text-amber-600' : 'text-gray-900'
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            'block truncate',
                            selected && 'font-semibold'
                          )}
                        >
                          {`${nome} `}

                          <span className='align-super text-xs font-semibold'>
                            {codigo}
                          </span>
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='h-5 w-5 stroke-amber-600 stroke-1' />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      )}
    </>
  )
}

const Label = () => (
  <label
    htmlFor='fornecedor'
    className='block text-sm font-medium leading-6 text-gray-900 drop-shadow-sm'
  >
    Fornecedor
    <span className='align-super text-xs font-semibold'>{'\t id'}</span>
  </label>
)

const Carregando = () => (
  <>
    <div className='mt-2 text-xs text-gray-500 subpixel-antialiased drop-shadow-sm sm:text-sm'>
      <Spinner /> Carregando fornecedores...
    </div>
  </>
)

const Erro = () => <div>Ops, houve um problema ao carregar os fornecedores</div>

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export { FornecedorCombobox }
