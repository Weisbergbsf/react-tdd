import { AccountModel } from '@/domain/model'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }

  export type Model = AccountModel
}
