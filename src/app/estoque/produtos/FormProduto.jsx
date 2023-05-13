import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { TextArea } from '@/components/TextArea'
import { Input } from '@/components/Input'
import { ButtonExcluirProduto } from './[codigo]/ButtonExcluirProduto'
import { MoneyInput } from '@/components/MoneyInput'
import { FornecedorCombobox } from '../fornecedores/ComboboxFornecedores'
import { PlusIcon } from '@heroicons/react/20/solid'

export const FormProduto = ({
  action,
  codigo,
  nome,
  descricao,
  fornecedor,
  fornecedores,
  preco,
  custo,
  quantidade,
  erros,
}) => (
  <Form
    action={action}
    buttons={{
      leftSlot: codigo && <ButtonExcluirProduto codigo={codigo} />,
      rightSlot: (
        <>
          <Button href='/estoque/produtos'>Cancelar</Button>
          <Button type='submit' variant='primary'>
            Salvar
          </Button>
        </>
      ),
    }}
  >
    {codigo && <input type='hidden' name='codigo' value={codigo} />}

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

    <div className='sm:col-span-6'>
      <div className='flex items-end space-x-4'>
        <div className='grow'>
          <FornecedorCombobox codigo={fornecedor} fornecedores={fornecedores} />
        </div>
        <Button href='/estoque/fornecedores/novo'>
          <PlusIcon className='-mr-0.5 h-5 w-5' />
          Cadastrar novo
        </Button>
      </div>
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
  </Form>
)
