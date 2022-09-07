import { Collapse, Alert } from '@mui/material';
import React from 'react';
import { AnswerState } from 'utils/constants';

interface Props {
  answer: AnswerState;
}

export default function AnswerAlert(props: Props) {
  const { answer } = props;

  return (
    <Collapse sx={{ width: '100%' }} in={answer !== AnswerState.NoAnswer}>
      <Alert
        sx={{ mb: 2 }}
        severity={answer === AnswerState.Correct ? 'success' : 'error'}
      >
        Your answer is{' '}
        {answer === AnswerState.Correct ? 'correct!' : 'incorrect!'}
      </Alert>
    </Collapse>
  );
}
