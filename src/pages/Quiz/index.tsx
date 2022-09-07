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
import LoadingBar from 'components/LoadingBar';
import QuizBox from './QuizBox';
import QuizResult from './QuizResult';

const Quiz = () => {
  const dispatch = useDispatch();
  const quizList: any = useSelector(quizListSelector);
  const [quizNum, setQuizNum] = useState(0);
  const [answer, setAnswer] = useState(AnswerState.NoAnswer);
  const [answers, setAnswers] = useState([false]);
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
        setAnswer(AnswerState.Correct);
        setAnswers(prevState => {
          prevState[quizNum] = true;
          return [...prevState];
        });
        setScore(prevState => prevState + 1);
      } else setAnswer(AnswerState.Incorrect);
    },
    [quizList, quizNum],
  );

  const handleNextClick = useCallback(() => {
    setAnswer(AnswerState.NoAnswer);
    setQuizNum(prevState => prevState + 1);
  }, []);

  return quizList ? (
    <>
      {quizNum < QUIZ_AMOUNT ? (
        <QuizBox
          quiz={quizList.results[quizNum]}
          quizNum={quizNum}
          score={score}
          answer={answer}
          handleCheckClick={handleCheckClick}
          handleNextClick={handleNextClick}
        />
      ) : (
        <QuizResult
          score={score}
          quizzes={quizList.results}
          answers={answers}
        />
      )}
    </>
  ) : (
    <LoadingBar open={quizList === null} />
  );
};

export default Quiz;
