import { takeLatest } from 'redux-saga/effects'
import { createApiCallSaga } from '../api'
import * as Types from './types'

const getQuizList = createApiCallSaga({
  type: Types.GET_QUIZ_LIST,
  method: 'GET',
  path: '/',
  selectorKey: 'quizList',
  allowedParamKeys: ['amount', 'difficulty', 'type'],
})

export default function* rootSaga() {
  yield takeLatest(Types.GET_QUIZ_LIST, getQuizList)
}
