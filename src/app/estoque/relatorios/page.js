import { produtosComBaixoEstoque } from '@/back-end/relatorios'
import { PageHeader } from '@/components/PageHeader'
import ProdutosComBaixoEstoque from './ProdutosComBaixoEstoque'

export default async function ListaProdutosComBaixoEstoque() {
  const produtos = await produtosComBaixoEstoque()

  return (
    <>
      <PageHeader title='Relatórios' />
      <ProdutosComBaixoEstoque produtos={produtos} />
    </>
  )
}
