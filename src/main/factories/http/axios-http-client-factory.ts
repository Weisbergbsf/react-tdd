
import { AxiosHttpClientAdapter } from '@/infra/http/axios-http-client/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpClientAdapter => {
  return new AxiosHttpClientAdapter()
}
