import React from 'react';
import Button from '@mui/material/Button';

export default function CstmBtn({ ...props }): JSX.Element {
  return <Button sx={{ mb: '10px' }} fullWidth variant='contained' {...props} />;
}
