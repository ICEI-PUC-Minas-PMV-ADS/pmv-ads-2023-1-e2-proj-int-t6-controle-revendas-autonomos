import { DetailPage } from '@/components/DetailPage'
import { FormProduto } from '../FormProduto'
import { cadastrarProduto } from '../_actions'
import { listar as getFornecedores } from '@/back-end/fornecedores'

async function NovoProduto({ searchParams }) {
  const dados = (!!searchParams?.dados && JSON.parse(searchParams.dados)) || {}
  const erros = !!searchParams?.erros && JSON.parse(searchParams.erros)

  dados['fornecedores'] = await getFornecedores()

  return (
    <DetailPage title={`Novo Produto`} subtitle={'Cadastre um novo produto'}>
      <FormProduto action={cadastrarProduto} {...dados} erros={erros} />
    </DetailPage>
  )
}

export default NovoProduto
