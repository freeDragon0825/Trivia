/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import CstmBtn from 'components/CstmBtn';
import QuizAnswerItem from 'components/QuizAnswerItem';
import { quizListSelector, answerListSelector } from 'store';
import { QUIZ_AMOUNT, QuizType } from 'utils/constants';
import LoadingBar from 'components/LoadingBar';

export default function Result() {
  const quizList: any = useSelector(quizListSelector);
  const answers: any = useSelector(answerListSelector);
  let score = 0;
  answers?.forEach((answer: boolean) => (answer === true ? ++score : score));

  return answers ? (
    <GridContainer>
      <GridItem>
        <Typography variant="h4" align="center">
          You scored {score} / {QUIZ_AMOUNT}
        </Typography>
      </GridItem>
      <GridItem>
        {quizList.results.map((quiz: QuizType, index: number) => (
          <QuizAnswerItem key={index} answer={answers[index]} quiz={quiz} />
        ))}
      </GridItem>
      <GridItem alignItems="center" display="flex" flexDirection="column">
        <CstmBtn href="/">PLAY AGAIN?</CstmBtn>
      </GridItem>
    </GridContainer>
  ) : (
    <LoadingBar open={answers === null} />
  );
}
