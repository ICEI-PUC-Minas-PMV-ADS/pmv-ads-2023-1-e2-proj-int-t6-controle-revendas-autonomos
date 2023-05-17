import { sql } from '@vercel/postgres'

const cadastrar = async ({
  nome,
  descricao,
  fornecedor,
  preco,
  custo,
  quantidade,
  usuario,
}) => {
  const novoProduto = {
    nome,
    descricao,
    fornecedor,
    preco,
    custo,
    quantidade,
    usuario,
  }

  const precoNumerico = brlToFloat(preco)
  const custoNumerico = brlToFloat(custo)

  const validacao = validar(novoProduto)

  if (Object.keys(validacao.erros).length > 0) return validacao

  const { rows } = await sql`
      INSERT INTO produto (
        nome,
        descricao,
        fornecedor,
        preco,
        custo,
        quantidade,
        usuario)
      VALUES (
        ${nome},
        ${descricao},
        ${fornecedor},
        ${precoNumerico},
        ${custoNumerico},
        ${quantidade},
        ${usuario})
      RETURNING codigo
    `

  novoProduto.codigo = rows[0]?.codigo

  return novoProduto
}

const buscarPorCodigo = async (codigo) => {
  const { rows } = await sql`
    SELECT p.*, f.nome as nome_fornecedor
    FROM produto p
    LEFT JOIN fornecedor f ON p.fornecedor = f.codigo
    WHERE p.codigo = ${codigo};
  `

  return rows[0]
}

const listar = async (usuario) => {
  const { rows } = await sql`
    SELECT p.*, f.nome as nome_fornecedor
    FROM produto p
    LEFT JOIN fornecedor f ON p.fornecedor = f.codigo
    WHERE p.usuario = ${usuario}
    ORDER BY p.nome;
  `

  return rows
}

const alterar = async ({
  codigo,
  nome,
  descricao,
  fornecedor,
  preco,
  custo,
  quantidade,
}) => {
  const precoNumerico = brlToFloat(preco)
  const custoNumerico = brlToFloat(custo)

  const validacao = validar({
    nome,
    preco,
    quantidade,
  })

  // if (Object.keys(validacao.erros).length > 0) return validacao;

  await sql`
    UPDATE produto SET
      nome = ${nome},
      descricao = ${descricao},
      fornecedor = ${fornecedor},
      preco = ${precoNumerico},
      custo = ${custoNumerico},
      quantidade = ${quantidade}
    WHERE codigo = ${codigo}
  `
}

const excluir = async ({ codigo }) => {
  const { rowCount } = await sql`DELETE FROM produto WHERE codigo = ${codigo}`

  return rowCount === 1
}

const validar = ({ nome, preco, custo, quantidade }) => {
  const precoNumerico = brlToFloat(preco)
  const custoNumerico = brlToFloat(custo)

  let resultado = { erros: {} }

  if (nome === '') {
    resultado.erros.nome = 'O nome do produto não pode estar em branco.'
  }

  if (quantidade < 0) {
    resultado.erros.quantidade =
      'A quantidade do produto não pode ser negativa.'
  }

  // Verificando se os campos preco e quantidade são números:
  if (isNaN(parseFloat(precoNumerico))) {
    resultado.erros.preco = 'O preço do produto deve ser um número válido.'
  }

  if (precoNumerico <= 0.0) {
    resultado.erros.preco = 'O preço do produto deve ser maior que R$ 0,00.'
  }

  if (isNaN(parseFloat(custoNumerico))) {
    resultado.erros.custo = 'O custo do produto deve ser um número válido.'
  }

  if (custoNumerico <= 0.0) {
    resultado.erros.custo = 'O custo do produto deve ser maior que R$ 0,00.'
  }

  if (isNaN(parseInt(quantidade))) {
    resultado.erros.quantidade =
      'Quantidade do produto deve ser um número inteiro válido.'
  }

  return resultado
}

const buscarPorFornecedor = async (fornecedor) => {
  const { rows } = await sql`
    SELECT p.*, f.nome as nome_fornecedor
    FROM produto p
    LEFT JOIN fornecedor f ON p.fornecedor = f.codigo
    WHERE
        f.codigo = ${fornecedor};
  `

  return rows
}

function brlToFloat(brlValue) {
  return parseFloat(brlValue?.replace('.', '').replace(',', '.'))
}

export {
  cadastrar,
  buscarPorCodigo,
  buscarPorFornecedor,
  listar,
  alterar,
  excluir,
}
