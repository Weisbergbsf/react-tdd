import { AxiosHttpClientAdapter } from './axios-http-client'
import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClientAdapter
  mockedAxios: jest.Mocked<typeof axios>
}

const mockeSut = (): SutTypes => {
  const sut = new AxiosHttpClientAdapter()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClientAdapter', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = mockeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = mockeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
