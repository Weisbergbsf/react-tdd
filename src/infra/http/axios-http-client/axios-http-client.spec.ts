import { AxiosHttpClientAdapter } from './axios-http-client'
import { mockAxios, mockHttpResponse } from '@/infra/test'
import { mockPostRequest, mockGetRequest } from '@/data/test'
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
  describe('post', () => {
    test('Should call axios.post with correct values', async () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = mockeSut()
      await sut.post(request)
      expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('Should return correct response on axios.post', () => {
      const { sut, mockedAxios } = mockeSut()
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })

    test('Should return correct error on axios.post', () => {
      const { sut, mockedAxios } = mockeSut()
      mockedAxios.post.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
  })

  describe('get', () => {
    test('Should call axios.get with correct values', async () => {
      const request = mockGetRequest()
      const { sut, mockedAxios } = mockeSut()
      await sut.get(request)
      expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
    })

    test('Should return correct response on axios.get', async () => {
      const { sut, mockedAxios } = mockeSut()
      const httpResponse = await sut.get(mockGetRequest())
      const axiosReponse = await mockedAxios.get.mock.results[0].value
      expect(httpResponse).toEqual({
        statusCode: axiosReponse.status,
        body: axiosReponse.data
      })
    })
  })
})
