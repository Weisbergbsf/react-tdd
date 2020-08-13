import { AccountModel } from '@/domain/model'

export interface UpdateCurrentAccount {
  save: (account: AccountModel) => Promise<void>
}
