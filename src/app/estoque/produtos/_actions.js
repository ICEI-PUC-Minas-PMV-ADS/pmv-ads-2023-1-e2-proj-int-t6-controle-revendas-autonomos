'use server'

import * as produtos from '@/back-end/produtos'
import { buscarId } from '@/back-end/usuarios'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function cadastrarProduto(formData) {
  const dados = Object.fromEntries(formData)

  dados.usuario = await buscarId()

  const resultado = await produtos.cadastrar(dados)

  if ('erros' in resultado) {
    const erros = JSON.stringify(resultado.erros)
    const dadosString = JSON.stringify(dados)

    return redirect(
      `/estoque/produtos/novo?erros=${erros}&dados=${dadosString}`
    )
  }

  redirect('/estoque/produtos')
}

async function atualizarProduto(formData) {
  const dados = Object.fromEntries(formData)

  const resultado = await produtos.alterar(dados)

  if (resultado && 'erros' in resultado) {
    const erros = JSON.stringify(resultado.erros)
    const dadosString = JSON.stringify(dados)

    return redirect(
      `/estoque/produtos/${codigo}?erros=${erros}&dados=${dadosString}`
    )
  }

  revalidatePath(`/estoque/produtos/${dados.codigo}`)
  revalidatePath(`/estoque/produtos`)
  revalidatePath(`/estoque/produtos`)

  redirect('/estoque/produtos')
}

async function excluirProduto({ codigo }) {
  await produtos.excluir({ codigo })

  revalidatePath(`/estoque/produtos/${codigo}`)
  revalidatePath(`/estoque/produtos`)

  redirect('/estoque/produtos')
}

export { cadastrarProduto, atualizarProduto, excluirProduto }
