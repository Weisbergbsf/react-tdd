
import { AxiosHttpClientAdapter } from '@/infra/http'

export const makeAxiosHttpClient = (): AxiosHttpClientAdapter => {
  return new AxiosHttpClientAdapter()
}
