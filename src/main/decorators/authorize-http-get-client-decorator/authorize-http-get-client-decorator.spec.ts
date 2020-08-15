import { mockGetRequest, GteStorageSpy } from '@/data/test'
import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'

describe('AuthorizeHttpGetClientDecoratos', () => {
  test('Should call GetStorage with correct value', () => {
    const getStorageSpy = new GteStorageSpy()
    const sut = new AuthorizeHttpGetClientDecorator(getStorageSpy)
    sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
