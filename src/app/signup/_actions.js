'use server'

import { cadastrar } from '@/back-end/usuarios'
import { redirect } from 'next/navigation'

async function cadastrarUsuario(formData) {
  const dados = Object.fromEntries(formData)

  const resultado = await cadastrar(dados)

  if ('erros' in resultado) {
    const erros = JSON.stringify(resultado.erros)
    const dadosString = JSON.stringify(dados)

    return redirect(`/signup?erros=${erros}&dados=${dadosString}`)
  }

  redirect('/login?conta-criada=true')
}

export { cadastrarUsuario }
