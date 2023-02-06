import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navigation(props) {
  const { gameIsStarted, stopGame, playerCount } = props;
  const [btnText, setBtnText] = useState("Spiel starten");
  let navigate = useNavigate();

  useEffect(() => {
    const text = gameIsStarted ? 'Spiel beenden' : 'Spiel starten';
    setBtnText(text);
  }, [gameIsStarted]);

  const onNavToGameStart = () => {
    if (gameIsStarted) {
      stopGame(false);
    };

    navigate('/');
  };

  return (
    <div style={{padding: '15px'}}>
      <Button
        color='inherit'
        variant="outlined"
        onClick={onNavToGameStart}>
        {btnText}
      </Button>

      &nbsp;&nbsp;
      
      <Button
        color='inherit'
        variant="outlined"
        onClick={() => navigate('/Bestenliste')}>
        Bestenliste ({playerCount})
      </Button>
    </div>
  )
}
