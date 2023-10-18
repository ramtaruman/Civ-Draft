// Team.js

import React from 'react';
import Civilization from './Civilization';
import { useDrop } from 'react-dnd';

const Team = ({ team, onPick, onBan }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'CIVILIZATION',
    drop: (item) => {
      if (team.id === item.teamId) {
        if (item.action === 'pick') {
          onPick(item.civilization);
        } else if (item.action === 'ban') {
          onBan(item.civilization);
        }
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div className={`team ${isOver && canDrop ? 'hovered' : ''}`}>
      <h3>{team.name}</h3>
      <div className="picks-column" ref={drop}>
        <h4>Picks</h4>
        {team.picks.map((pickedCivilization) => (
          <Civilization key={pickedCivilization.id} civilization={pickedCivilization} action="pick" />
        ))}
      </div>
      <div className="bans-column" ref={drop}>
        <h4>Bans</h4>
        {team.bans.map((bannedCivilization) => (
          <Civilization key={bannedCivilization.id} civilization={bannedCivilization} action="ban" />
        ))}
      </div>
    </div>
  );
};

export default Team;
