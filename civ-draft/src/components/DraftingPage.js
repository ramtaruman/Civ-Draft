// DraftingPage.js

import React, { useState } from 'react';
import Team from './Team';
import Civilization from './Civilization';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Import the CSS for this component
import './DraftingPage.css';

const DraftingPage = () => {
  const [availableCivilizations, setAvailableCivilizations] = useState([
    { id: 1, name: 'Civilization A' },
    { id: 2, name: 'Civilization B' },
    { id: 3, name: 'Civilization C' },
    { id: 4, name: 'Civilization D' },
    { id: 5, name: 'Civilization E' },
    { id: 6, name: 'Civilization F' },
    // Add more civilizations as needed
  ]);

  const [team1, setTeam1] = useState({
    id: 1,
    name: 'Team 1',
    bans: [],
    picks: [],
  });

  const handlePick = (civilization) => {
    setTeam1((prevTeam) => ({
      ...prevTeam,
      picks: [...prevTeam.picks, civilization],
    }));

    // Remove the picked civilization from availableCivilizations
    setAvailableCivilizations((prevCivilizations) =>
      prevCivilizations.filter((civ) => civ.id !== civilization.id)
    );
  };

  const handleBan = (civilization) => {
    setTeam1((prevTeam) => ({
      ...prevTeam,
      bans: [...prevTeam.bans, civilization],
    }));

    // Remove the banned civilization from availableCivilizations
    setAvailableCivilizations((prevCivilizations) =>
      prevCivilizations.filter((civ) => civ.id !== civilization.id)
    );
  };



  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drafting-page">
        <h2>Team Drafting Page</h2>
        <div className="teams-container">
          <Team team={team1} onPick={handlePick} onBan={handleBan} />
          <div className="civilization-list">
            {availableCivilizations.map((civilization) => (
              <Civilization key={civilization.id} civilization={civilization} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DraftingPage;
