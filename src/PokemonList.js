import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <div className='list'>
      {pokemons.map((pokemon, i) => <Pokemon key={pokemon.id + i} pokemon={pokemon}/>)}
    </div>
  );
}
