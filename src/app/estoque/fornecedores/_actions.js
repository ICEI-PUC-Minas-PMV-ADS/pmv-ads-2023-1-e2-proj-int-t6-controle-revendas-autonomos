'use server'

import * as fornecedores from '@/back-end/fornecedores'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function cadastrarFornecedor(formData) {
  const dados = Object.fromEntries(formData)

  await fornecedores.cadastrar(dados)

  revalidatePath(removeDomain(dados.referer))

  redirect(dados.referer)
}

async function atualizarFornecedor(formData) {
  const dados = Object.fromEntries(formData)

  await fornecedores.alterar(dados)

  revalidatePath(`/estoque/fornecedores/${dados.codigo}`)
  revalidatePath(`/estoque/fornecedores`)

  redirect('/estoque/fornecedores')
}

async function excluirFornecedor({ codigo }) {
  await fornecedores.excluir({ codigo })

  revalidatePath(`/estoque/fornecedores/${codigo}`)
  revalidatePath(`/estoque/fornecedores`)

  redirect('/estoque/fornecedores')
}

function removeDomain(url) {
  let urlObj = new URL(url)
  return urlObj.pathname + urlObj.search + urlObj.hash
}

export { cadastrarFornecedor, atualizarFornecedor, excluirFornecedor }
