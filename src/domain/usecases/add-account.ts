import { AccountModel } from '@/domain/model'

export type AddAccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddAccount {
  auth: (params: AddAccountParams) => Promise<AccountModel>
}