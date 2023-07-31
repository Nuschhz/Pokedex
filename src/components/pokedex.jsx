import "../css/pokedex.css";
import logo from "../images/logo.png";

import React from "react";
import PokemonInputs from "./pokemonInputs.jsx";
import PokemonCard from "./pokemonCard";
import Pages from "./pages.jsx";

import { useState } from "react";
import { useGetPokemons } from "../hooks/useGetPokemons";

function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonPage,setPokemonPage] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const offset = limit - 24;
  const maxPages = 42;

  const NextPage = () => {
    if(page !== maxPages){
      setPage(page + 1);
      setLimit(limit + 24);
    }
  };

  const PreviousPage = () => {
    if(page > 1){
      setPage(page - 1);
      setLimit(limit - 24);
    }
  };

  const window = 
    <div className="PokemonContainerDesk">
      {pokemon.map((pokemon, key) => (
        <PokemonCard
          key={key}
          pokemonName={pokemon.data.name}
          pokemonNumber={pokemon.data.id}
          types={pokemon.data.types}
        />
      ))}
    </div>

  const pageSelector = 
    <Pages 
      currentPage={page} 
      maxPages={maxPages} 
      previousPage={PreviousPage} 
      nextPage={NextPage} 
    />

  const inputs = 
    <PokemonInputs 
      searchPokemon={setPokemon} 
      initialState={pokemonPage}
    />
    
  useGetPokemons(offset, limit, setPokemon, setPokemonPage);
  
  return (
    <div className="BackgroundDesk">
      <img src={logo} alt="Pokemon logo" className="Logo" />
      <div className="SearchTabDesk">
        {inputs}
        {pageSelector}
      </div>
        <div>
          {window}
        </div>
    </div>
  );
}

export default Pokedex;
