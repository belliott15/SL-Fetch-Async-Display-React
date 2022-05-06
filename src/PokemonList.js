import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <div className='list'>
      {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
    </div>
  );
}
