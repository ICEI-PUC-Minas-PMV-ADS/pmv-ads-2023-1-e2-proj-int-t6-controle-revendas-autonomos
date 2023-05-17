import { sql } from '@vercel/postgres'

const cadastrar = async ({ nome, usuario }) => {
  const novoFornecedor = { nome, usuario }

  const { rows } = await sql`
    INSERT INTO fornecedor (nome, usuario)
    VALUES (${nome}, ${usuario})
    RETURNING codigo
  `

  novoFornecedor.codigo = rows[0]?.codigo

  return novoFornecedor
}

const buscarPorCodigo = async (codigo) => {
  const { rows } = await sql`
    SELECT * FROM fornecedor
    WHERE codigo = ${codigo};
  `

  return rows[0]
}

const listar = async (usuario) => {
  const { rows } = await sql`
    SELECT * FROM fornecedor
    WHERE usuario = ${usuario}
    ORDER BY nome;
  `

  return rows
}

const alterar = async ({ codigo, nome }) => {
  await sql`
    UPDATE fornecedor
    SET
      nome = ${nome}
    WHERE codigo = ${codigo}
  `
}

const excluir = async ({ codigo }) => {
  const { rowCount } =
    await sql`DELETE FROM fornecedor WHERE codigo = ${codigo}`

  return rowCount === 1
}

export { cadastrar, buscarPorCodigo, listar, alterar, excluir }
