import './NavBar.css';
import { useState } from 'react';

const NavBar = ({pokemonIndex, setPokemonIndex,pokemonList}) => {
    const handleClickP = () => (pokemonIndex > 0) ? setPokemonIndex(pokemonIndex - 1) : null;
    const handleClickS = () => (pokemonIndex < pokemonList.length - 1) ? (setPokemonIndex(pokemonIndex + 1)) : null;
        return (
            <>
            <button onClick={handleClickP}>Precedent</button>
            <button onClick={handleClickS}>Suivant</button>
            </>
        )
}

export default NavBar;