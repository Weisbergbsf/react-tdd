import { LocalSaveAccessToken } from './local-save-access-token'
import { SteStorageSpy } from '@/data/test/mock-storage'
import faker from 'faker'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageSpy: SteStorageSpy
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SteStorageSpy()
  const sut = new LocalSaveAccessToken(setStorageSpy)
  return {
    sut,
    setStorageSpy
  }
}

describe('LocalSaveAccessToken', () => {
  test('Shold call SetStorage with correct value',async () => {
    const { sut, setStorageSpy } = makeSut()
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
