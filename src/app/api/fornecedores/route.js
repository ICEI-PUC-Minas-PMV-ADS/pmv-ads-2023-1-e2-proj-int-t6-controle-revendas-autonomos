import { listar as getFornecedores } from '@/back-end/fornecedores'
import { buscarId } from '@/back-end/usuarios'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const usuario = await buscarId()

  return NextResponse.json(await getFornecedores(usuario))
}
