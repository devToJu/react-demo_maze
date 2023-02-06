import { Grid } from '@mui/material'
import React from 'react'
import Goals from './Goals'
import MoveCounter from './MoveCounter'

export default function Info() {
  return (
    <Grid container spacing={2} pb={2}>
      <Grid item sm ml={2}>
        <Goals />
      </Grid>

      <Grid item xs={4} mr={2}>
        <MoveCounter />
      </Grid>
    </Grid>
  )
}
