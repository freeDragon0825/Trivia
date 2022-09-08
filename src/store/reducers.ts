/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as types from './types';

const initialState = {
  play: false,
  loading: false,
};

interface IAction {
  payload: {
    selectorKey: string;
    data: object;
    loading: boolean;
    play: boolean;
    answers: boolean[];
  };
}

const data = handleActions(
  {
    [types.SET_PLAY]: (prevState: any, action: IAction) => {
      const { payload } = action;
      prevState.play = payload.play;
      return { ...prevState };
    },

    [types.SET_LOADING]: (prevState: any, action: IAction) => {
      const { payload } = action;
      prevState.loading = payload.loading;
      return { ...prevState };
    },

    [types.SET_QUIZ_LIST]: (prevState: any, action: IAction) => {
      const { payload } = action;
      prevState.loading = false;
      return {
        ...prevState,
        [payload.selectorKey]: {
          ...payload.data,
        },
      };
    },

    [types.SET_ANSWER_LIST]: (prevState: any, action: IAction) => {
      const { payload } = action;
      return {
        ...prevState,
        answerList: [...payload.answers],
      };
    },
  },
  initialState,
);

export default combineReducers({
  data,
});
