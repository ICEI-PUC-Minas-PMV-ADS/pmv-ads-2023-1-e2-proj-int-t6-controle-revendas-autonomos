'use client'

import { excluirFornecedor } from '../_actions'
import { ModalConfirmacao } from '@/components/ModalConfirmacao'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useState, useTransition } from 'react'

export function ButtonExcluirFornecedor({ codigo }) {
  const [confirma, setConfirma] = useState(false)
  let [isPending, startTransition] = useTransition()

  return (
    <>
      <button
        type='button'
        onClick={() => setConfirma(true)}
        className='group inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-semibold text-gray-500 hover:text-rose-600 '
      >
        <TrashIcon className='mr-3 h-5 w-5 text-gray-500 group-hover:text-rose-600 ' />
        Excluir fornecedor
      </button>

      <ModalConfirmacao
        title={`Excluir fornecedor #${codigo}`}
        message={'Quer mesmo excluir este fornecedor?'}
        primaryAction={{
          label: 'Excluir',
          action: () => startTransition(() => excluirFornecedor({ codigo })),
          isPending,
        }}
        open={confirma}
        setOpen={setConfirma}
      />
    </>
  )
}
