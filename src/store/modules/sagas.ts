import { all } from 'redux-saga/effects';

import { saga as quizSaga } from './quiz';

export default function* rootSaga() {
  yield all([quizSaga()]);
}
