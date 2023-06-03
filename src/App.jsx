import './App.css';
import PokemonCard from './components/PokemonCard';
<<<<<<< Updated upstream
import NavBar from './components/NavBar';
=======
>>>>>>> Stashed changes
import { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
<<<<<<< Updated upstream
  
  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar /*pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}*//>
=======
  const handleClickP = () => (pokemonIndex > 0) ? setPokemonIndex(pokemonIndex - 1) : null;
  const handleClickS = () => (pokemonIndex < pokemonList.length - 1) ? (setPokemonIndex(pokemonIndex + 1)) : null;

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick={handleClickP}>Precedent</button>
      <button onClick={handleClickS}>Suivant</button>
>>>>>>> Stashed changes
    </>
  );
}

export default App
