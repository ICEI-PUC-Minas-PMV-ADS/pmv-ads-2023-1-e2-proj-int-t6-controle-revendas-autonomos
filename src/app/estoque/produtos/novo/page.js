// import { FormProduto } from '../FormProduto'
import { FornecedorCombobox } from '../../fornecedores/ComboboxFornecedores'
import { cadastrarProduto } from '../_actions'
import { Button } from '@/components/Button'
import { DetailPage } from '@/components/DetailPage'
import { Input } from '@/components/Input'
import { MoneyInput } from '@/components/MoneyInput'
import { TextArea } from '@/components/TextArea'
import { PlusIcon } from '@heroicons/react/24/outline'

function NovoProduto({ searchParams }) {
  const dados = (!!searchParams?.dados && JSON.parse(searchParams.dados)) || {}
  const erros = !!searchParams?.erros && JSON.parse(searchParams.erros)

  const { nome, descricao, fornecedor, preco, custo, quantidade } = dados

  return (
    <DetailPage title='Novo Produto' subtitle='Cadastre um novo produto'>
      {/* <FormProduto action={cadastrarProduto} {...dados} erros={erros} /> */}

      <form action={cadastrarProduto}>
        <div className='border-b border-gray-900/10 pb-12'>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-6'>
              <div className='flex items-end space-x-4'>
                <div className='grow'>
                  <FornecedorCombobox codigo={fornecedor} />
                </div>
                <Button href='/estoque/fornecedores/novo'>
                  <PlusIcon className='-mr-0.5 h-5 w-5' />
                  Cadastrar novo
                </Button>
              </div>
            </div>

            <div className='sm:col-span-6'>
              <Input
                label='Nome'
                name='nome'
                type='text'
                required
                defaultValue={nome || ''}
                erro={erros['nome'] || undefined}
              />
            </div>

            <div className='sm:col-span-6'>
              <TextArea
                label='Descrição'
                name='descricao'
                rows='3'
                defaultValue={descricao || ''}
              />
            </div>

            <div className='sm:col-span-2'>
              <MoneyInput
                name='preco'
                label='Preço'
                defaultValue={preco || ''}
                min={0.01}
                erro={erros['preco'] || undefined}
                required
              />
            </div>

            <div className='sm:col-span-2'>
              <MoneyInput
                name='custo'
                label='Custo'
                defaultValue={custo || ''}
                erro={erros['custo'] || undefined}
              />
            </div>

            <div className='sm:col-span-2'>
              <Input
                label='Quantidade'
                type='number'
                name='quantidade'
                defaultValue={quantidade || ''}
                required
                min='0'
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end px-4 sm:px-0'>
          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <Button href='/estoque/produtos'>Cancelar</Button>
            <Button type='submit' variant='primary'>
              Salvar
            </Button>
          </div>
        </div>
      </form>
    </DetailPage>
  )
}

export default NovoProduto
