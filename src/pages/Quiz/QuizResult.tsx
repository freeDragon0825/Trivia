import React from 'react';
import { Typography } from '@mui/material';

import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import CstmBtn from 'components/CstmBtn';
import QuizAnswerItem from 'components/QuizAnswerItem';
import { QUIZ_AMOUNT } from 'utils/constants';

type Quiz = {
  category: string;
  question: string;
  correct_answer: string;
};

interface Props {
  score: number;
  quizzes: Quiz[];
  answers: boolean[];
}

export default function QuizResult(props: Props) {
  const { score, quizzes, answers } = props;

  return (
    <GridContainer>
      <GridItem>
        <Typography variant="h4" align="center">
          You scored {score} / {QUIZ_AMOUNT}
        </Typography>
      </GridItem>
      <GridItem>
        {quizzes.map((quiz, index) => (
          <QuizAnswerItem key={index} answer={answers[index]} quiz={quiz} />
        ))}
      </GridItem>
      <GridItem alignItems="center" display="flex" flexDirection="column">
        <CstmBtn href="/">PLAY AGAIN?</CstmBtn>
      </GridItem>
    </GridContainer>
  );
}
