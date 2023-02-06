import { Grid } from '@mui/material';
import React from 'react'
import { Navigate } from 'react-router-dom';
import imgPathGold from '../../images/gold.jpg'

export default function GridItemRoom(props) {
  const { name, isExit, isTreasure, allGoalsFound } = props;

  return (
    <Grid item xs={4} textAlign='center' style={{ backgroundColor: 'white' }}>
      {
        isExit ?
          allGoalsFound ?
            <Navigate to={'/winner'} /> :
            <>Exit</>
          :
          isTreasure ?
            <>
              <img src={imgPathGold} alt='gold' width={100} />
              <br />
              {name}
            </>
            :
            <>{name}</>
      }
    </Grid>
  )
}
