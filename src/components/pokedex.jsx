import "../css/pokedex.css";
import logo from "../images/logo.png";

import React from "react";
import PokemonInputs from "./pokemonInputs.jsx";
import PokemonCard from "./pokemonCard";
import Pages from "./pages.jsx";

import { useState, useEffect, useRef } from "react";
import { useGetPokemons } from "../hooks/useGetPokemons";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const offset = limit - 24;
  const maxPages = 42;


  const previousPokemon = useRef();
 
    useEffect(() => {
        previousPokemon.current = pokemon;
    }, [pokemon]);

  function NextPage(){
    if(page !== maxPages){
      setPage(page + 1);
      setLimit(limit + 24);
    }
  }
  function PreviousPage(){
    if(page > 1){
      setPage(page - 1);
      setLimit(limit - 24);
    }
  }
  
  useGetPokemons(offset, limit, setPokemon);

  return (
    <div className="Background">
      <img src={logo} alt="Pokemon logo" className="Logo" />
      <div className="SearchTab">
        <PokemonInputs searchPokemon={setPokemon} initialState={previousPokemon.current}/>
        <Pages 
        currentPage={page} 
        maxPages={maxPages} 
        previousPage={PreviousPage} 
        nextPage={NextPage} 
        />
      </div>

      <div className="Border">
          <React.Suspense fallback="loading...">
        <div className="PokemonContainer">
            {pokemon.map((pokemon, key) => (
              <PokemonCard
                key={key}
                pokemonName={pokemon.data.name}
                pokemonNumber={pokemon.data.id}
                types={pokemon.data.types}
              />
            ))}
        </div>
            </React.Suspense>
      </div>
    </div>
  );
}

export default Pokedex;
