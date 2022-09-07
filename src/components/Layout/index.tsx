import React from 'react';
import { Container } from '@mui/material'

const Layout = (props: object) => {
  return <Container maxWidth="sm" sx={{ height: '100vh' }} {...props} />;
};

export default Layout;
