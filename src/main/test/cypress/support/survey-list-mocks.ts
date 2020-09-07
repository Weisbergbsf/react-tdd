import * as Http from './http-mocks'

export const mockUnexpectedError = (): void => Http.mockServerError(/surveys/, 'GET')
export const mockAccessDenieddError = (): void => Http.mockForbiddenError(/surveys/, 'GET')
