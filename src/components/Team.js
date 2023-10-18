// Team.js

import React from 'react';
import Civilization from './Civilization';
import { useDrop } from 'react-dnd';

const Team = ({ team, onPick, onBan }) => {
  const [{ isPickOver, canPickDrop }, pickDrop] = useDrop({
    accept: 'CIVILIZATION',
    drop: (item) => {
      if (team.id === item.teamId && item.action === 'pick') {
        onPick(item.civilization);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const [{ isBanOver, canBanDrop }, banDrop] = useDrop({
    accept: 'CIVILIZATION',
    drop: (item) => {
      if (team.id === item.teamId && item.action === 'ban') {
        onBan(item.civilization);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  // Initialize bans with Civilization A and picks with Civilization B
  const bans = [ { id: 1, name: 'Civilization A' } ]; // Replace with the actual ID of Civilization A
  const picks = [ { id: 2, name: 'Civilization B' } ]; // Replace with the actual ID of Civilization B

  return (
    <div className={`team ${isPickOver && canPickDrop ? 'hovered' : ''}`}>
      <h3 className="team-name">{team.name}</h3>
      <div className={`column picks-column ${isPickOver && canPickDrop ? 'hovered' : ''}`} ref={pickDrop}>
        <h4>Picks</h4>
        {picks.map((pickedCivilization) => (
          <Civilization key={pickedCivilization.id} civilization={pickedCivilization} action="pick" />
        ))}
      </div>
      <div className={`column bans-column ${isBanOver && canBanDrop ? 'hovered' : ''}`} ref={banDrop}>
        <h4>Bans</h4>
        {bans.map((bannedCivilization) => (
          <Civilization key={bannedCivilization.id} civilization={bannedCivilization} action="ban" />
        ))}
      </div>
    </div>
  );
};

export default Team;
