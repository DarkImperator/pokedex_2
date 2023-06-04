import './NavBar.css';
import { useState } from 'react';

const NavBar = ({pokemonName, setPokemonName,pokemonList}) => {
    const handleClick = (e) => setPokemonName(e.target.innerHTML);
        return (
            <>
            {pokemonList.map(pokemon => (
                <button onClick={handleClick} key={pokemon.name}>{pokemon.name}</button>))}
            </>
        )
}

export default NavBar;
