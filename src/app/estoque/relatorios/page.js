import ProdutosComBaixoEstoque from './ProdutosComBaixoEstoque'
import { produtosComBaixoEstoque } from '@/back-end/relatorios'
import { PageHeader } from '@/components/PageHeader'

export default async function ListaProdutosComBaixoEstoque() {
  const produtos = await produtosComBaixoEstoque()

  return (
    <>
      <PageHeader title='Relatórios' />
      <ProdutosComBaixoEstoque produtos={produtos} />
    </>
  )
}
