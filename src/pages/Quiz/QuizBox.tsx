/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Collapse, Alert } from '@mui/material';

import CstmBtn from 'components/CstmBtn';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import { QUIZ_AMOUNT, AnswerState } from 'utils/constants';


export default function QuizBox({ ...props }): JSX.Element {
  const {
    quizList,
    quizNum,
    score,
    isAnswered,
    handleCheckClick,
    handleNextClick,
  } = props;
  return (
    <GridContainer>
      <GridItem>
        <Typography variant="h4" align="center">
          {quizList.results[quizNum].category}
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
            __html: quizList.results[quizNum].question,
          }}
        />
      </GridItem>
      <GridItem alignItems="center" display="flex" flexDirection="column">
        <Collapse
          sx={{ width: '100%' }}
          in={isAnswered !== AnswerState.NoAnswer}
        >
          <Alert
            sx={{ mb: 2 }}
            severity={isAnswered === AnswerState.Correct ? 'success' : 'error'}
          >
            Your answer is{' '}
            {isAnswered === AnswerState.Correct ? 'correct!' : 'incorrect!'}
          </Alert>
        </Collapse>
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
        {isAnswered ? <CstmBtn onClick={handleNextClick}>Next</CstmBtn> : null}
      </GridItem>
    </GridContainer>
  );
}