import { SurveyList } from '@/presentation/pages'
import { LoadSurveyList } from '@/domain/usecases'
import { SurveyModel } from '@/domain/model'
import { render, screen } from '@testing-library/react'
import React from 'react'

class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  async loadAll (): Promise<SurveyModel[]> {
    this.callsCount++
    return null
  }
}

type SutTypes = {
  loadSurveyListSpy: LoadSurveyListSpy
}

const makeSut = (): SutTypes => {
  const loadSurveyListSpy = new LoadSurveyListSpy()
  render(<SurveyList loadSurveyList={loadSurveyListSpy}/>)
  return {
    loadSurveyListSpy
  }
}

describe('SurveyList', () => {
  test('Should present 4 empty items on start', () => {
    makeSut()
    const surveyList = screen.getByTestId('survey-list')
    expect(surveyList.querySelectorAll('li:empty').length).toBe(4)
  })

  test('Should call LoadSurveyList', () => {
    const { loadSurveyListSpy } = makeSut()
    expect(loadSurveyListSpy.callsCount).toBe(1)
  })
})
