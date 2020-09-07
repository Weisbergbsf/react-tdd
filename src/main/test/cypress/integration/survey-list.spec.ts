import * as Helper from '../utils/helpers'
import * as Http from '../utils/http-mocks'

const mockUnexpectedError = (): void => Http.mockServerError(/surveys/, 'GET')
const mockAccessDenieddError = (): void => Http.mockForbiddenError(/surveys/, 'GET')

describe('SurveyList ', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helper.setLocalStorageItem('account', account)
    })
  })
  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
  })

  it('Should logout on AccessDeniedError', () => {
    mockAccessDenieddError()
    cy.visit('')
    Helper.testUrl('/login')
  })

  it('Should present correct username', () => {
    mockUnexpectedError()
    cy.visit('')
    const { name } = Helper.getLocalStorageItem('account')
    cy.getByTestId('username').should('contain.text', name)
  })

  it('Should logout on logout link click', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('logout').click()
    Helper.testUrl('/login')
  })
})
