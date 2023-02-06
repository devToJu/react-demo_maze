import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Bestenliste from './Bestenliste';
import Navigation from './Navigation';
import Room from './room/Room';
import StartGame from './StartGame'
import { getAllRooms } from '../api/Api'
import { GameDataContext } from './GameDataContext';
import { LinearProgress } from '@mui/material';
import Info from './info/Info';
import Winner from './Winner';

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [moves, setMoves] = useState(0);
  const [rooms, setRooms] = useState(null);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [treasureIsFound, setTreasureIsFound] = useState(false);
  const [exitIsFound, setExitIsFound] = useState(false);
  const [bestenliste, setBestenliste] = useState([]);

  useEffect(() => {
    if (gameIsStarted && rooms === null) {
      const promise = getAllRooms();

      promise.then(data => {
        const roomsArray = Object.values(data.rooms);
        setRooms(roomsArray[0]);
      });
    }
  }, [gameIsStarted, rooms]);

  const stopGame = () => {
    saveData();
    resestData();
  };

  const saveData = () => {
    let fine = treasureIsFound ? 0 : 10;
    fine += exitIsFound ? 0 : 10;

    const list = [
      ...bestenliste,
      { name: playerName, moves: moves + fine }
    ];

    list.sort((a, b) => a.moves - b.moves);
    setBestenliste(list);
  };

  const resestData = () => {
    setGameIsStarted(false);
    setPlayerName('');
    setMoves(0);
    setExitIsFound(false);
    setTreasureIsFound(false);
  };

  return (
    <GameDataContext.Provider
      value={{
        rooms: rooms,
        goals: { treasureIsFound, setTreasureIsFound, exitIsFound, setExitIsFound },
        moveCounter: { moves, setMoves }
      }}>

      <BrowserRouter>
        <header style={{ backgroundColor: 'lightgray' }}>
          <Navigation
            gameIsStarted={gameIsStarted}
            stopGame={stopGame}
            playerCount={bestenliste.length} />
          <Info />
        </header>

        <main>
          <Routes>
            <Route path='/'>
              <Route
                path=''
                element={
                  rooms !== null && gameIsStarted ?
                    <Navigate to='room/1' />
                    :
                    gameIsStarted ?
                      <><br /><LinearProgress /></>
                      :
                      <StartGame playerName={playerName}
                        changePlayerName={setPlayerName}
                        startGame={setGameIsStarted} />
                }
              />

              <Route path='/room' element={<Room />}>
                <Route path=':id' element={<Room />} />
              </Route>

              <Route
                path='/winner'
                element={
                  <Winner
                    stopGame={stopGame}
                    name={playerName} />
                }
              />
            </Route>

            <Route path='/bestenliste' element={<Bestenliste bestenliste={bestenliste} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </GameDataContext.Provider >
  )
};