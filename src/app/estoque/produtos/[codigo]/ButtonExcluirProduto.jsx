'use client'

import { ModalConfirmacao } from '@/components/ModalConfirmacao'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useState, useTransition } from 'react'
import { excluirProduto } from '../_actions'

export function ButtonExcluirProduto({ codigo }) {
  const [confirma, setConfirma] = useState(false)
  let [isPending, startTransition] = useTransition()

  return (
    <>
      <button
        type='button'
        onClick={() => setConfirma(true)}
        className='inline-flex items-center pt-4 pr-1 text-sm font-semibold text-gray-500 transition ease-out hover:text-rose-600 group drop-shadow-sm'
      >
        <TrashIcon className='w-5 h-5 mr-3 text-gray-500 group-hover:text-rose-600' />
        Excluir produto
      </button>

      <ModalConfirmacao
        title={`Excluir produto ${codigo}`}
        message={'Quer mesmo excluir este produto?'}
        primaryAction={{
          label: 'Excluir',
          action: () => startTransition(() => excluirProduto({ codigo })),
          isPending,
        }}
        open={confirma}
        setOpen={setConfirma}
      />
    </>
  )
}
