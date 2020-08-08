import { LocalSaveAccessToken } from './local-save-access-token'
import { SteStorageSpy } from '@/data/test/mock-storage'
import faker from 'faker'

describe('LocalSaveAccessToken', () => {
  test('Shold call SetStorage with correct value',async () => {
    const setStorageSpy = new SteStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
