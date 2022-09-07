/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Collapse, Typography } from '@mui/material';

import { quizListSelector, getQuizList } from 'store/modules/quiz';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import { QUIZ_AMOUNT, QUIZ_DIFFICULTY, QUIZ_TYPE } from 'utils/constants';

enum AnswerState {
  NoAnswer,
  Correct,
  Incorrect,
}

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
                severity={
                  isAnswered === AnswerState.Correct ? 'success' : 'error'
                }
              >
                Your answer is{' '}
                {isAnswered === AnswerState.Correct ? 'correct!' : 'incorrect!'}
              </Alert>
            </Collapse>
            <Button
              sx={{ mb: '10px' }}
              fullWidth
              variant="outlined"
              onClick={() => {
                handleCheckClick('True');
              }}
            >
              Yes
            </Button>
            <Button
              sx={{ mb: '10px' }}
              fullWidth
              variant="outlined"
              onClick={() => {
                handleCheckClick('False');
              }}
            >
              No
            </Button>
            {isAnswered ? (
              <Button
                sx={{ mb: '10px' }}
                fullWidth
                variant="contained"
                onClick={handleNextClick}
              >
                Next
              </Button>
            ) : null}
          </GridItem>
        </GridContainer>
      ) : (
        <GridContainer>
          <GridItem>
            <Typography variant="h4" align="center">
              You scored {score} / {QUIZ_AMOUNT}
            </Typography>
          </GridItem>
          <GridItem alignItems="center" display="flex" flexDirection="column">
            <Button variant="contained" href="/">
              PLAY AGAIN?
            </Button>
          </GridItem>
        </GridContainer>
      )}
    </>
  ) : (
    <div>Waiting</div>
  );
};

export default Quiz;
