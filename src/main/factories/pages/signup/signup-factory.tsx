import React from 'react'
import { Signup } from '@/presentation/pages'
import { makeSignUpValidation } from '@/main/factories/pages'
import { makeRemoteAddAccount } from '@/main/factories/usecases'

export const makeSignUp: React.FC = () => {
  return (
    <Signup
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
    />
  )
}
