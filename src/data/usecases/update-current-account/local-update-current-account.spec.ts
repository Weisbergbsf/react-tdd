import { mockAccountModel } from '@/domain/test'
import { LocalUpdateCurrentAccount } from './local-update-current-account'
import { SteStorageMock } from '@/data/test'
import { UnexpectedError } from '@/domain/errors'

type SutTypes = {
  sut: LocalUpdateCurrentAccount
  setStorageMock: SteStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SteStorageMock()
  const sut = new LocalUpdateCurrentAccount(setStorageMock)
  return {
    sut,
    setStorageMock
  }
}

describe('LocalUpdateCurrentAccount', () => {
  test('Shold call SetStorage with correct value',async () => {
    const { sut, setStorageMock } = makeSut()
    const account = mockAccountModel()
    await sut.save(account)
    expect(setStorageMock.key).toBe('account')
    expect(setStorageMock.value).toBe(JSON.stringify(account))
  })

  test('Shold throw if SetStorage throws',async () => {
    const { sut, setStorageMock } = makeSut()
    jest.spyOn(setStorageMock, 'set').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.save(mockAccountModel())
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Shold throw if accessToken is Falsy',async () => {
    const { sut } = makeSut()
    const promise = sut.save(undefined)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
