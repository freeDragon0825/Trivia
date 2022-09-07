/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid } from '@mui/material';
// import { IntrinsicAttributes } from '@mui/type';

const GridContainer = (props: any) => {
  return (
    <Grid
      container
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      minHeight='100%'
      {...props}
    />
  );
};

export default GridContainer;
