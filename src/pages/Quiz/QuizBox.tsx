import React from 'react';
import { Typography } from '@mui/material';

import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import CstmBtn from 'components/CstmBtn';
import AnswerAlert from 'components/AnswerAlert';
import { QUIZ_AMOUNT, AnswerState } from 'utils/constants';

type Quiz = {
  category: string;
  question: string;
};

interface Props {
  quizzes: Quiz[];
  quizNum: number;
  score: number;
  answer: AnswerState;
  handleCheckClick: (answer: string) => void;
  handleNextClick: () => void;
}

export default function QuizBox(props: Props): JSX.Element {
  const {
    quizzes,
    quizNum,
    score,
    answer,
    handleCheckClick,
    handleNextClick,
  } = props;
  return (
    <GridContainer>
      <GridItem>
        <Typography variant="h4" align="center">
          {quizzes[quizNum].category}
        </Typography>
        <Typography variant="h6" align="center">
          Your Score: {score}
        </Typography>
        <Typography variant="body1" align="center">
          Question: {quizNum + 1} / {QUIZ_AMOUNT}
        </Typography>
      </GridItem>
      <GridItem>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: quizzes[quizNum].question,
          }}
        />
      </GridItem>
      <GridItem alignItems="center" display="flex" flexDirection="column">
        <AnswerAlert answer={answer} />
        <CstmBtn
          variant="outlined"
          onClick={() => {
            handleCheckClick('True');
          }}
        >
          Yes
        </CstmBtn>
        <CstmBtn
          variant="outlined"
          onClick={() => {
            handleCheckClick('False');
          }}
        >
          No
        </CstmBtn>
        {answer ? <CstmBtn onClick={handleNextClick}>Next</CstmBtn> : null}
      </GridItem>
    </GridContainer>
  );
}
