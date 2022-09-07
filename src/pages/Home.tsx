import React from 'react';
import { Typography, Button } from '@mui/material';

import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';

const Home = () => {
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
          <Button variant="contained" size="large" href="quiz">
            BEGIN
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Home;
