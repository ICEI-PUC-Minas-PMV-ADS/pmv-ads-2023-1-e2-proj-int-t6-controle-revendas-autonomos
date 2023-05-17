'use client'

import { excluirProduto } from '../_actions'
import { ModalConfirmacao } from '@/components/ModalConfirmacao'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useState, useTransition } from 'react'

export function ButtonExcluirProduto({ codigo }) {
  const [confirma, setConfirma] = useState(false)
  let [isPending, startTransition] = useTransition()

  return (
    <>
      <button
        type='button'
        onClick={() => setConfirma(true)}
        className='group inline-flex items-center pr-1 pt-4 text-sm font-semibold text-gray-500 drop-shadow-sm transition ease-out hover:text-rose-600'
      >
        <TrashIcon className='mr-3 h-5 w-5 text-gray-500 group-hover:text-rose-600' />
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
