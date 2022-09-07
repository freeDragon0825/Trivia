import React from 'react';
import { Container } from '@mui/material'

const CustomContainer = (props: object) => {
  return <Container maxWidth="sm" sx={{ height: '100vh' }} {...props} />;
};

export default CustomContainer;
