import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function StartGame(props) {
  const { changePlayerName, playerName, startGame } = props

  return (
    <Box sx={{ height: '900px', margin: '10px' }}>
      <center>
        <form onSubmit={() => startGame(true)}>
          <br /><br /><br /><br />

          <h1>Die Schatzsuche</h1>

          <p>
            Suche in den Räumen den Schatz und finde anschließen den Ausgang aus dem Labyrinth.<br />
            Versuche so wenige Bewegungen wie möglich zu machen.<br />
          </p>

          <TextField
            id="outlined"
            label="Spielername"
            type="search"
            value={playerName}
            onChange={(event) => (changePlayerName(event.target.value))} />

          <br /><br />

          <Button
            color="inherit"
            variant="outlined"
            type="submit"
            disabled={!playerName}>
            Start
          </Button>
        </form>
      </center>
    </Box >
  )
}
