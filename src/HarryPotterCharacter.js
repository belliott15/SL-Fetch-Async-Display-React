import React from 'react';

export default function HarryPotterCharacter({ character }) {
  return (
    <div style={{ background: 'gray' }} className='harry-potter-card' >
      <h1>{character.name}</h1>
      <h4>{character.house}</h4>
      <p>{character.wand_material}</p>
      <p>{character.wand_length}</p>
      <p>{character.wand_core}</p>
      <ul>
        {character.appearance_in_books.map((books, i) => <li key={books + i}>{books}</li>)}
      </ul>
    </div>
  );
}
