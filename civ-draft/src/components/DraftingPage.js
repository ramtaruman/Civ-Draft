// DraftingPage.js

import React, { useState } from 'react';
import Team from './Team';
import Civilization from './Civilization';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './DraftingPage.css';

const DraftingPage = () => {
  const availableCivilizations = [
    { id: 1, name: 'Civilization A' },
    { id: 2, name: 'Civilization B' },
    // Add more civilizations
  ];

  const [team1, setTeam1] = useState({
    id: 1,
    name: 'Team 1',
    bans: [],
    picks: [],
  });

  const [team2, setTeam2] = useState({
    id: 2,
    name: 'Team 2',
    bans: [],
    picks: [],
  });

  const handlePick = (civilization) => {
    // Implement your logic to add picked civilizations to teams
    // For example, check which team is picking and add the civilization to their picks.
    setTeam1((prevTeam) => ({
      ...prevTeam,
      picks: [...prevTeam.picks, civilization],
    }));
  };

  const handleBan = (civilization) => {
    // Implement your logic to add banned civilizations to teams
    // For example, check which team is banning and add the civilization to their bans.
    setTeam1((prevTeam) => ({
      ...prevTeam,
      bans: [...prevTeam.bans, civilization],
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drafting-page">
        <h2>Team Drafting Page</h2>
        <Team team={team1} onPick={handlePick} onBan={handleBan} />
        <Team team={team2} onPick={handlePick} onBan={handleBan} />
        <div className="civilization-list">
          {availableCivilizations.map((civilization) => (
            <Civilization key={civilization.id} civilization={civilization} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DraftingPage;
