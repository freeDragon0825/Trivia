import React from 'react'
import { Backdrop, CircularProgress  } from '@mui/material'

export default function LoadingBar() {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 9999 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
