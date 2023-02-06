import { Button, Grid } from '@mui/material';
import React, { useContext } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp } from 'react-icons/fa';
import { GiDoor } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { GameDataContext } from '../GameDataContext';

export default function GridItemNextDoor(props) {
  let navigate = useNavigate();
  const { moves, setMoves } = useContext(GameDataContext)['moveCounter']

  const goToNextRoom = () => {
    setMoves(moves + 1);
    navigate(`/room/${props.nextRoomId}`);
  };

  const nextIcons = {
    up: <FaArrowAltCircleUp size={50} color='green' />,
    down: <FaArrowAltCircleDown size={50} color='green' />,
    left: <FaArrowAltCircleLeft size={50} color='green' />,
    right: <FaArrowAltCircleRight size={50} color='green' />
  };

  return (
    <>
      {
        props.nextRoomId === 0 ?
          <Grid item xs={4} height={100} />
          :
          <Grid item xs={4} textAlign='center'>
            <Button onClick={goToNextRoom}>
              <GiDoor size={100} color='black' />
              {nextIcons[props.icon]}
            </Button>
          </Grid>
      }
    </>
  )
}
