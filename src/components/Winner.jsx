import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import imgPathWin from '../images/win.jpg'
import { CenterHorizontalAndVerical } from './CenterComponents'

export default function Winner(props) {
  const { stopGame, name } = props;
  let navigate = useNavigate();

  const goToBestenliste = () => {
    stopGame();
    navigate('/Bestenliste');
  };

  return (
    <div
      style={{
        marginTop: '20px',
        backgroundImage: `url(${imgPathWin})`,
        backgroundSize: '100%',
        height: '950px'
      }}>

      <CenterHorizontalAndVerical>
        <div>
          <CenterHorizontalAndVerical>
            <p style={{ color: 'white', textAlign: 'center' }}>
              Herzlichen Gückwunsch<br />
              {name}
            </p>
          </CenterHorizontalAndVerical>

          <CenterHorizontalAndVerical>
            <Button
              variant="outlined"
              onClick={goToBestenliste}>
              ZUR BESTENLISTE
            </Button>
          </CenterHorizontalAndVerical>
        </div>
      </CenterHorizontalAndVerical>
    </div>
  )
}
