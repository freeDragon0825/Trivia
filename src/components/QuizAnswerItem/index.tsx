import React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  Check as CorrectIcon,
  Close as IncorrectIcon,
} from '@mui/icons-material';

import { QuizType } from 'utils/constants'

interface Props {
  answer: boolean;
  quiz: QuizType;
}

export default function QuizAnswerItem(props: Props) {
  const { answer, quiz } = props;
  return (
    <Grid display="flex" alignItems="center">
      {answer === true ? (
        <CorrectIcon color="success" />
      ) : (
        <IncorrectIcon color="error" />
      )}
      <Typography
        dangerouslySetInnerHTML={{
          __html: `${quiz.question}(${quiz.correct_answer})`,
        }}
      />
    </Grid>
  );
}
