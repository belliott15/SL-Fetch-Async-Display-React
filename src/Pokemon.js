import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div style={{ background: pokemon.color }} className='card'>
      <h2>{pokemon.Name}</h2>
      <h4>{pokemon.type}</h4>
    </div>
  );
}
