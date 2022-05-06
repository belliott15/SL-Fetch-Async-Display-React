import React from 'react';

export default function candy({ candy }) {
  return (
    <div style={{ background: candy.color }} className='card'>
      <h2>{candy.name}</h2>
      <p>Type:{candy.category}</p>
      <p>Consistency: {candy.consistency}</p>
    </div>
  );
}
