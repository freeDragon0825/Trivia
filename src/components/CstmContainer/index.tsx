import React from 'react';
import { Container } from '@mui/material';

const CstmContainer = ({ ...props }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ height: '100vh' }}
      {...props}
    />
  );
};

export default CstmContainer;
