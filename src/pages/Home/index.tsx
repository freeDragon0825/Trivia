import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

import { setPlay } from 'store';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import CstmBtn from 'components/CstmBtn';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlay({ play: false }));
  }, []);

  const handlePlayClick = useCallback(() => {
    dispatch(setPlay({ play: true }));
    navigate('/quiz');
  }, []);

  return (
    <>
      <GridContainer>
        <GridItem>
          <Typography variant="h3" align="center">
            Welcome to the Trivia Challenge!
          </Typography>
        </GridItem>
        <GridItem>
          <Typography variant="h4" align="center">
            You will be presented with 10 True or False questions
          </Typography>
        </GridItem>
        <GridItem>
          <Typography variant="h4" align="center">
            Can you socre 100%?
          </Typography>
        </GridItem>
        <GridItem alignItems="center" display="flex" flexDirection="column">
          <CstmBtn onClick={handlePlayClick}>BEGIN</CstmBtn>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Home;
