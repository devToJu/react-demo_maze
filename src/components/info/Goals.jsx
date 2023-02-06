import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import { GameDataContext } from '../GameDataContext';

export default function Goals() {
  const goals = useContext(GameDataContext)['goals'];

  return (
    <Box sx={{ background: 'white', padding: '10px'}}>
      <Grid container>
        <Grid item>
          <AiOutlineAim size={30} />
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div" ml={1} gutterBottom>
            Ziele im Labyrinth
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox color="default"
                  checked={goals.treasureIsFound}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label='Finde den Schatz'
            />

            <FormControlLabel
              control={
                <Checkbox color="default"
                  checked={goals.exitIsFound}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label='Finde den Ausgang'
            />
          </FormGroup>

        </Grid>
      </Grid>
      <Typography variant="body2" gutterBottom>
        INFO: Beim vorzeitigen Beenden des Spiels gibt es für jedes nicht gefundene Ziel 10 Strafpunkte
      </Typography>
    </Box>
  )
}
