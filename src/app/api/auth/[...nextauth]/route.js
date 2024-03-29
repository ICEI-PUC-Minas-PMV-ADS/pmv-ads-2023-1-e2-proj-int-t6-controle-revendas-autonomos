import { autenticar } from '@/back-end/usuarios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Usuário e senha',
      credentials: {
        email: {
          label: 'Usuário',
          type: 'text',
          placeholder: 'email@provedor.com',
        },
        senha: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, senha } = credentials

        const resultado = await autenticar({ email, senha })

        if (resultado.success) {
          const { id, nome: name } = resultado

          return { id, name, email }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      session.user.id = token.id

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
