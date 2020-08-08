import { RemoteAddAccount } from './remote-add-account'
import { HttpPostClientSpy } from '@/data/test'
import faker from 'faker'
import { AddAccountParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/model'
import { mockAccountParams } from '@/domain/test'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  // stu: system under test
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAccountParams())
    expect(httpPostClientSpy.url).toBe(url)
  })
})
