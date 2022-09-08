/* eslint-disable @typescript-eslint/no-unused-vars */
import fp from 'lodash/fp';

const createDataSelector = (selectorKey: string, defaultVal = null) =>
  fp.compose(
    fp.defaultTo(defaultVal),
    fp.compose(fp.get)(selectorKey),
    fp.get(['data']),
  );

export const loadingSelector = createDataSelector('loading');
export const quizListSelector = createDataSelector('quizList');
export const answerListSelector = createDataSelector('answerList');
