import React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  Check as CorrectIcon,
  Close as IncorrectIcon,
} from '@mui/icons-material';


type Quiz = {
  question: string;
  correct_answer: string;
};

interface Props {
  answer: boolean;
  quiz: Quiz;
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
