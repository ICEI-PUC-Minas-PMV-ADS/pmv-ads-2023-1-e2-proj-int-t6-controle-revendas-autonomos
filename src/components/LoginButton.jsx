'use client'

import { Button } from './Button'
import { ProfileDropdown } from './ProfileDropdown'
import { Spinner } from './Spinner'
import { signIn, signOut, useSession } from 'next-auth/react'

const LoginProfileButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <Spinner />
  }

  if (session) {
    return <ProfileDropdown signOut={signOut} />
  }

  return (
    <Button variant='primary' onClick={() => signIn()}>
      Entrar
    </Button>
  )
}

export { LoginProfileButton }
