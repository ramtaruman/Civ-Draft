// Team.js

import React, { useState } from 'react';

const Team = ({ team, onDraftUpdate, availableCivilizations }) => {
  const [selectedCiv, setSelectedCiv] = useState(null);

  const handleBan = () => {
    onDraftUpdate(team.id, 'ban', selectedCiv);
    setSelectedCiv(null);
  };

  const handlePick = () => {
    onDraftUpdate(team.id, 'pick', selectedCiv);
    setSelectedCiv(null);
  };

  return (
    <div className="team">
      <h3>{team.name}</h3>
      <div className="draft-actions">
        <div>
          <label>Select Civilization:</label>
          <select
            value={selectedCiv || ''}
            onChange={(e) => setSelectedCiv(e.target.value)}
          >
            <option value="">Choose Civilization</option>
            {availableCivilizations.map((civ) => (
              <option key={civ.id} value={civ.id}>
                {civ.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleBan}>Ban</button>
        <button onClick={handlePick}>Pick</button>
      </div>
    </div>
  );
};

export default Team;
