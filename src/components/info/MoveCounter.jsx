import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CenterHorizontalAndVerical } from '../CenterComponents'
import { GameDataContext } from '../GameDataContext'
import { GiRun } from "react-icons/gi";

export default function MoveCounter() {
  const { moves } = useContext(GameDataContext)['moveCounter']

  return (
    <Box sx={{ bgcolor: 'white', height: '160px' }}>
      <CenterHorizontalAndVerical>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5" component="div" ml={1} gutterBottom>
            <GiRun size={20} /> Bewegungen
          </Typography>
          <Typography variant="h3" component="div" ml={1} gutterBottom>
            {moves}
          </Typography>
        </div>
      </CenterHorizontalAndVerical>
    </Box>
  )
}
