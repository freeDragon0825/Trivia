import { createAction } from 'redux-actions';
import * as types from './types';

export const setLoading = createAction(types.SET_LOADING);
export const getQuizList = createAction(types.GET_QUIZ_LIST);
export const setQuizList = createAction(types.SET_QUIZ_LIST);
export const setAnswerList = createAction(types.SET_ANSWER_LIST);
