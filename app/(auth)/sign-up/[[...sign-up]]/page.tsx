import { SignUp as ClerkSignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='auth-page'>
        <ClerkSignUp />
    </main>
  )
}

export default SignUpPage;
