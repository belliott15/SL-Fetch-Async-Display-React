import { useEffect, useState } from 'react';
import { getIceCreams, getPokemon, getCandies, getHarryPotterCharacters } from './services/fetch-utils';
import CandyList from './CandyList';
import IceCreamList from './IceCreamList';
import PokemonList from './PokemonList';
import HarryPotterCharacterList from './HarryPotterCharacterList';
import './App.css';

function App() {
  const [iceCreams, setIceCreams] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [candies, setCandies] = useState([]);
  const [harryPotterCharacters, setHarryPotterCharacters] = useState([]);

  useEffect(async () => {
    const iceCreamsArray = await getIceCreams();
    setIceCreams(iceCreamsArray);

    const pokemonsArray = await getPokemon();
    setPokemons(pokemonsArray);

    const candiesArray = await getCandies();
    setCandies(candiesArray);

    const harryPotterCharactersArray = await getHarryPotterCharacters();
    setHarryPotterCharacters(harryPotterCharactersArray);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <IceCreamList iceCreams={iceCreams} />
        <PokemonList pokemons={pokemons} />
        <CandyList candies={candies} />
        <HarryPotterCharacterList harryPotterCharacters={harryPotterCharacters} />
      </header>
    </div>
  );
}

export default App;
