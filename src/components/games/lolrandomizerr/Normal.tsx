import React, { useState } from 'react';
import SelectNumberOfPlayers from './SelectNumberOfPlayers';
import { type Tplayers } from '../../models/player';
import Player from './Player';
import style from './Normal.module.css';
import AddPlayersInfo from './AddPlayersInfo';

const Normal = () => {
  const [players, setPlayers] = useState<Tplayers>([]);
  const [playersNumber, setPlayersNumber] = useState('1');

  return (
    <>
      <SelectNumberOfPlayers playersNumber={playersNumber} setPlayersNumber={setPlayersNumber} />
      <AddPlayersInfo onSetPlayers={setPlayers} playersNumber={playersNumber} />
      <div className={style.players}>
        {players.map((singlePlayer, index) => (
          <Player
            key={index}
            playerName={players[index].playerName}
            playerRole={players[index].playerRole}
            playerChampion={players[index].playerChampion}
          />
        ))}
      </div>
    </>
  );
};

export default Normal;