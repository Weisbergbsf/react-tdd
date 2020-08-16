import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { AccountModel } from '@/domain/model'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}
