import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen w-full bg-purple-100'>
    <SignIn/>
    </div>
  )
}
export default SignInPage