import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { sql } from '@vercel/postgres'
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

const cadastrar = async ({ nome, email, senha }) => {
  const novoUsuario = { nome, email }

  const senhaHash = await bcrypt.hash(senha, 10)

  const { rows } = await sql`
    INSERT INTO usuario (nome, email, senha)
    VALUES (${nome}, ${email}, ${senhaHash})
    RETURNING id
  `

  novoUsuario.id = rows[0]?.id

  return novoUsuario
}

const buscarId = async () => {
  const session = await getServerSession(authOptions)

  const { id } = await buscarPorEmail(session.user.email)

  return id
}

const buscarPorId = async (id) => {
  const { rows } = await sql`
    SELECT id, nome, email FROM usuario
    WHERE id = ${id};
  `

  return rows[0]
}

const buscarPorEmail = async (email) => {
  const { rows } = await sql`
    SELECT id, nome, email FROM usuario
    WHERE email = ${email};
  `

  return rows[0]
}

const listar = async () => {
  const { rows } = await sql`
    SELECT id, nome, email FROM usuario
    ORDER BY nome;
  `

  return rows
}

const alterar = async ({ id, nome, email, senha }) => {
  const senhaHash = await bcrypt.hash(senha, 10)

  await sql`
    UPDATE usuario SET
      nome = ${nome},
      email = ${email},
      senha = ${senhaHash}
    WHERE id = ${id}
  `
}

const excluir = async ({ id }) => {
  const { rowCount } = await sql`DELETE FROM usuario WHERE id = ${id}`

  return rowCount === 1
}

const autenticar = async ({ email, senha }) => {
  const { rows } = await sql`
    SELECT * FROM usuario
    WHERE email = ${email};
  `

  const usuario = rows[0]

  const senhaValida = usuario && (await bcrypt.compare(senha, usuario.senha))

  if (!usuario || !senhaValida) {
    return { erro: 'Usuário ou senha inválidos.' }
  }

  return {
    success: true,
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
  }
}

export {
  buscarId,
  cadastrar,
  buscarPorId,
  buscarPorEmail,
  listar,
  alterar,
  excluir,
  autenticar,
}
