/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { quizListSelector, getQuizList, setAnswerList } from 'store';
import {
  QUIZ_AMOUNT,
  QUIZ_DIFFICULTY,
  QUIZ_TYPE,
  AnswerState,
} from 'utils/constants';
import QuizBox from './QuizBox';

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizList: any = useSelector(quizListSelector);
  const [quizNum, setQuizNum] = useState(0);
  const [answer, setAnswer] = useState(AnswerState.NoAnswer);
  const [answers, setAnswers] = useState([false]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    !quizList &&
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
    if (quizNum < QUIZ_AMOUNT - 1) {
      setAnswer(AnswerState.NoAnswer);
      setQuizNum(prevState => prevState + 1);
    } else {
      dispatch(
        setAnswerList({
          answers: answers,
        }),
      );
      navigate('/result');
    }
  }, [quizNum, answers]);

  return (
    quizList && (
      <QuizBox
        quiz={quizList.results[quizNum]}
        quizNum={quizNum}
        score={score}
        answer={answer}
        handleCheckClick={handleCheckClick}
        handleNextClick={handleNextClick}
      />
    )
  );
};

export default Quiz;
