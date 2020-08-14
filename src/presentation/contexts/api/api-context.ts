import { createContext } from 'react'
import { AccountModel } from '@/domain/model'

type Props = {
  setCurrentAccount?: (account: AccountModel) => void
  getCurrentAccount?: () => AccountModel
}

export default createContext<Props>(null)
