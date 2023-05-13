import { sql } from '@vercel/postgres'

const produtosComBaixoEstoque = async () => {
  const { rows } = await sql`
    SELECT p.*, f.nome as nome_fornecedor
    FROM produto p
    LEFT JOIN fornecedor f ON p.fornecedor = f.codigo
    WHERE p.quantidade < 25
    ORDER BY p.nome;
  `

  return rows
}

export { produtosComBaixoEstoque }
