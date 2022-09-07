import React from 'react';
import { Grid } from '@mui/material';

const GridContainer = ({ ...props }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      minHeight="100%"
      {...props}
    />
  );
};

export default GridContainer;
