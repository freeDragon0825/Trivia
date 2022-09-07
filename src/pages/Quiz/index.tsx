/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quizListSelector, getQuizList } from 'store/modules/quiz';
import {
  QUIZ_AMOUNT,
  QUIZ_DIFFICULTY,
  QUIZ_TYPE,
  AnswerState,
} from 'utils/constants';
import QuizBox from './QuizBox';
import QuizResult from './QuizResult';

const Quiz = () => {
  const dispatch = useDispatch();
  const quizList: any = useSelector(quizListSelector);
  const [quizNum, setQuizNum] = useState(0);
  const [isAnswered, setIsAnswered] = useState(AnswerState.NoAnswer);
  const [score, setScore] = useState(0);

  useEffect(() => {
    dispatch(
      getQuizList({
        params: {
          amount: QUIZ_AMOUNT,
          difficulty: QUIZ_DIFFICULTY,
          type: QUIZ_TYPE,
        },
      }),
    );
  }, []);

  const handleCheckClick = useCallback(
    (answer: string) => {
      if (answer === quizList.results[quizNum].correct_answer) {
        setIsAnswered(AnswerState.Correct);
        setScore(prevState => prevState + 1);
      } else setIsAnswered(AnswerState.Incorrect);
    },
    [quizList, quizNum],
  );

  const handleNextClick = useCallback(() => {
    setIsAnswered(AnswerState.NoAnswer);
    setQuizNum(prevState => prevState + 1);
  }, []);

  return quizList ? (
    <>
      {quizNum < QUIZ_AMOUNT ? (
        <QuizBox
          quizzes={quizList.results}
          quizNum={quizNum}
          score={score}
          isAnswered={isAnswered}
          handleCheckClick={handleCheckClick}
          handleNextClick={handleNextClick}
        />
      ) : (
        <QuizResult score={score} />
      )}
    </>
  ) : (
    <div>Waiting</div>
  );
};

export default Quiz;
