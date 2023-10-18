// DraftingPage.js

import React, { useState } from 'react';
import Team from './Team';

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

  const handleDraftUpdate = (teamId, action, civilization) => {
    if (teamId === 1) {
      if (action === 'ban') {
        setTeam1({ ...team1, bans: [...team1.bans, civilization] });
      } else if (action === 'pick') {
        setTeam1({ ...team1, picks: [...team1.picks, civilization] });
      }
    } else if (teamId === 2) {
      if (action === 'ban') {
        setTeam2({ ...team2, bans: [...team2.bans, civilization] });
      } else if (action === 'pick') {
        setTeam2({ ...team2, picks: [...team2.picks, civilization] });
      }
    }
  };

  return (
    <div className="drafting-page">
      <h2>Team Drafting Page</h2>
      <Team team={team1} onDraftUpdate={handleDraftUpdate} availableCivilizations={availableCivilizations} />
      <Team team={team2} onDraftUpdate={handleDraftUpdate} availableCivilizations={availableCivilizations} />

      <div className="picked-bans">
        <div className="team-picks">
          <h3>{team1.name}'s Picks</h3>
          <ul>
            {team1.picks.map((civilization) => (
              <li key={civilization.id}>{civilization.name}</li>
            ))}
          </ul>
        </div>
        <div className="team-bans">
          <h3>{team1.name}'s Bans</h3>
          <ul>
            {team1.bans.map((civilization) => (
              <li key={civilization.id}>{civilization.name}</li>
            ))}
          </ul>
        </div>
        <div className="team-picks">
          <h3>{team2.name}'s Picks</h3>
          <ul>
            {team2.picks.map((civilization) => (
              <li key={civilization.id}>{civilization.name}</li>
            ))}
          </ul>
        </div>
        <div className="team-bans">
          <h3>{team2.name}'s Bans</h3>
          <ul>
            {team2.bans.map((civilization) => (
              <li key={civilization.id}>{civilization.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DraftingPage;
