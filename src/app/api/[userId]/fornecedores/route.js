import { listar as getFornecedores } from '@/back-end/fornecedores'
import { NextResponse } from 'next/server'

export async function GET(request) {
  return NextResponse.json(await getFornecedores())
}
