import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases/authenticaion/remote-authentication'
import { AxiosHttpClientAdapter } from '@/infra/http/axios-http-client/axios-http-client'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClientAdapter()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
