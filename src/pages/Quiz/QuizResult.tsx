import React from 'react'
import { Typography } from '@mui/material'

import CstmBtn from 'components/CstmBtn'
import GridContainer from 'components/GridContainer'
import GridItem from 'components/GridItem'
import { QUIZ_AMOUNT } from 'utils/constants'

interface Props {
  score: number
}

export default function QuizResult(props: Props) {
  const { score } = props;

  return (
    <GridContainer>
      <GridItem>
        <Typography variant="h4" align="center">
          You scored {score} / {QUIZ_AMOUNT}
        </Typography>
      </GridItem>
      <GridItem alignItems="center" display="flex" flexDirection="column">
        <CstmBtn href="/">PLAY AGAIN?</CstmBtn>
      </GridItem>
    </GridContainer>
  )
}
