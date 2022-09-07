import React from 'react'
import { Backdrop, CircularProgress  } from '@mui/material'

interface Props {
  open: boolean
}

export default function LoadingBar(props: Props) {
  const { open } = props

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 9999 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
