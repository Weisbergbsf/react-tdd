import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'

describe('EmailValidation', () => {
  test('Shoul return error if email is empty', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
