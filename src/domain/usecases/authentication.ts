import { AccountModel } from '@/domain/model'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Model>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }

  export type Model = AccountModel
}
