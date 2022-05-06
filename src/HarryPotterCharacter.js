import React from 'react';

export default function HarryPotterCharacter({ character }) {
  return (
    <div style={{ background: character.house === 'Gryffindor' && 'crimson' || 
                              character.house === 'Slytherin' && 'green' ||
                              character.house === 'Ravenclaw' && 'blue' }} 
    className='harry-potter-card' >
      <h1>{character.name}</h1>
      <h4>House:{character.house}</h4>
      <p>Wand Material: {character.wand_material}</p>
      <p>Length: {character.wand_length}</p>
      <p>Core: {character.wand_core}</p>
      <ul>
        {character.appearance_in_books.map((books, i) => <li key={books + i}>{books}</li>)}
      </ul>
    </div>
  );
}
