import { buscarPorCodigo } from '@/back-end/produtos'
import { DetailPage } from '@/components/DetailPage'
import { FormProduto } from '../FormProduto'
import { atualizarProduto } from '../_actions'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function EditarProduto({ params, searchParams }) {
  const { codigo } = params

  let dados = !!searchParams?.dados && JSON.parse(searchParams.dados)
  const erros = !!searchParams?.erros && JSON.parse(searchParams.erros)

  if (!dados) {
    dados = await buscarPorCodigo(codigo)
  }

  return (
    <DetailPage
      title={`Editar Produto ${codigo}`}
      subtitle={'Altere os dados do produto'}
    >
      <FormProduto action={atualizarProduto} {...dados} erros={erros} />
    </DetailPage>
  )
}
