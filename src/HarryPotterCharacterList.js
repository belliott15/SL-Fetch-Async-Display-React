import React from 'react';
import HarryPotterCharacter from './HarryPotterCharacter';

export default function HarryPotterCharacterList({ harryPotterCharacters }) {
  return (
    <div className='list'>
      {harryPotterCharacters.map((character) => <HarryPotterCharacter key={character.id} character={character}/>)}
    </div>
  );
}
