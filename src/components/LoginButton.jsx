'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './Button'
import { ProfileDropdown } from './ProfileDropdown'

const LoginButton = () => {
  const { data: session } = useSession()

  if (session) {
    return <ProfileDropdown signOut={signOut} />
  }

  return (
    <Button variant='primary' onClick={() => signIn()}>
      Entrar
    </Button>
  )
}

export { LoginButton }
