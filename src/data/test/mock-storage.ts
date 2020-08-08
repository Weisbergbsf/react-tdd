import { SetStorage } from '../protocols/cache/set-storage'

export class SteStorageMock implements SetStorage {
  key: string
  value: any
  async set (key: string, value: any): Promise<void> {
    this.key = key
    this.value = value
  }
}
