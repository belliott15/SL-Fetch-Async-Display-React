import { useEffect, useState } from 'react';
import { getIceCreams, getPokemon } from './services/fetch-utils';
import IceCreamList from './IceCreamList';
import PokemonList from './PokemonList';
import './App.css';

function App() {
  const [iceCreams, setIceCreams] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const iceCreamsArray = await getIceCreams();
    setIceCreams(iceCreamsArray);

    const pokemonsArray = await getPokemon();
    setPokemons(pokemonsArray);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <IceCreamList iceCreams={iceCreams}/>
        <PokemonList pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;
