import { mockGetRequest, GteStorageSpy } from '@/data/test'
import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'

type SutTypes = {
  sut: AuthorizeHttpGetClientDecorator
  getStorageSpy: GteStorageSpy
}

const makeSut = (): SutTypes => {
  const getStorageSpy = new GteStorageSpy()
  const sut = new AuthorizeHttpGetClientDecorator(getStorageSpy)
  return {
    sut,
    getStorageSpy
  }
}

describe('AuthorizeHttpGetClientDecoratos', () => {
  test('Should call GetStorage with correct value', () => {
    const { sut, getStorageSpy } = makeSut()
    sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
