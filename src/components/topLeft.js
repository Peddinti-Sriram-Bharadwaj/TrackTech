import React from 'react';

const TopLeft = ({state}) => {
    const mapEntries = Array.from(state);
  return (
    <div>
      <ul>
        {mapEntries.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );



};

export default TopLeft;