// Civilization.js

import React from 'react';
import { useDrag } from 'react-dnd';

const Civilization = ({ civilization, action, onPick }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CIVILIZATION',
    item: { id: civilization.id, name: civilization.name, action },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleClick = () => {
    if (action === 'pick') {
      onPick(civilization);
    }
  };

  return (
    <div
      ref={(node) => drag(node)}
      className={`civilization ${isDragging ? 'dragging' : ''}`}
      onClick={handleClick}
    >
      {civilization.name}
    </div>
  );
};

export default Civilization;
