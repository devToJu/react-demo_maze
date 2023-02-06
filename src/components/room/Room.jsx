import { Box, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GameDataContext } from '../GameDataContext';
import GridItemNextDoor from './GridItemNextDoor';
import GridItemRoom from './GridItemRoom';

export default function Room() {
  const boxStyle = {
    height: '900px',
    mt: '10px',
    backgroundColor: 'lightgray'
  };

  const gridStyles = {
    height: '100%',
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  };

  const { id } = useParams();
  const rooms = useContext(GameDataContext)['rooms'];
  const goals = useContext(GameDataContext)['goals'];
  const [currentRoom, setCurrentRoom] = useState({});

  useEffect(() => {
    if (rooms === null) {
      return;
    }
    
    setCurrentRoom(rooms[id]);
  }, [id, rooms]);

  useEffect(() => {
    if (currentRoom === null) {
      return;
    }

    if (currentRoom.exit === 1) {
      goals.setExitIsFound(true);
      return;
    }

    if (currentRoom.treasure === 1) {
      goals.setTreasureIsFound(true);
    }
  }, [currentRoom, goals])

  return (
    <Box sx={{ ...boxStyle }}>
      <Grid container sx={{ ...gridStyles }}>
        <Grid item xs={4} />

        <GridItemNextDoor nextRoomId={currentRoom.up} icon={'up'} />

        <Grid item xs={4} />

        <GridItemNextDoor nextRoomId={currentRoom.left} icon={'left'} />

        <GridItemRoom
          name={currentRoom.name}
          isExit={currentRoom.exit === 1}
          isTreasure={currentRoom.treasure === 1}
          allGoalsFound={goals.exitIsFound && goals.treasureIsFound} />

        <GridItemNextDoor nextRoomId={currentRoom.right} icon={'right'} />

        <Grid item xs={4} />

        <GridItemNextDoor nextRoomId={currentRoom.down} icon={'down'} />

        <Grid item xs={4} />
      </Grid>
    </Box>
  )
}
