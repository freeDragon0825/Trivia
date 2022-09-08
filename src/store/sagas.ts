/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setQuizList, setLoading } from './actions';
import { API_BASE } from 'utils/constants';
import * as Types from './types';

type PayloadType = {
  params: object;
};

interface IAction {
  type: typeof Types.GET_QUIZ_LIST;
  payload: PayloadType;
}

interface RequestParam {
  url: string;
  method: 'get' | 'post';
  params: object;
  baseURL: string;
}

const getQuizList = function* (action: IAction) {
  const { payload } = action;
  const { params } = payload;

  yield put(
    setLoading({
      type: Types.SET_LOADING,
      loading: true,
    }),
  );

  const reqParam: RequestParam = {
    url: '/',
    method: 'get',
    params: params,
    baseURL: API_BASE,
  };

  const { data } = yield call(axios.request, reqParam);
  yield put(
    setQuizList({
      selectorKey: 'quizList',
      method: 'get',
      type: Types.SET_QUIZ_LIST,
      data: data,
    }),
  );
};

export default function* rootSaga() {
  yield takeLatest(Types.GET_QUIZ_LIST, getQuizList);
}
