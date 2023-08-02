import "../css/pokedex.css";
import logo from "../images/logo.png";

import React, { useLayoutEffect } from "react";
import PokemonInputs from "./pokemonInputs.jsx";
import PokemonCard from "./pokemonCard.jsx";
import Pages from "./pages.jsx";

import { useState, useRef } from "react";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { useViewport } from "../hooks/useViewport";

function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonPage,setPokemonPage] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [searchWidth,setSearchWidth] = useState(0);
  const {width} = useViewport();

  const breakpoint = 780

  const resize = width > breakpoint ?
  {
    card:{
      gridTemplateRows: "repeat(4,1fr)", 
      gridTemplateColumns: "repeat(6, 1fr)", 
      gap: "5px"
  },
  scroll:{
    overflow: "hidden"
  }
}:{
    card:{
      gridTemplateRows: "repeat(12,1fr)", 
      gridTemplateColumns: "repeat(2, 1fr)", 
      gap: "10px",
  },
  scroll:{
      overflow: "hidden",
      overflowY: "scroll"
  }
}

  const offset = limit - 24;
  const maxPages = 42;

  const searchContainerWidthRef = useRef();

  useLayoutEffect(()=>{
    setSearchWidth(searchContainerWidthRef.current.offsetWidth);
  },[width, pokemon]);

  const NextPage = () => {
    if(page !== maxPages){
      setPage(page + 1);
      setLimit(limit + 24);
    }else if(page === maxPages){
      setPage(1);
      setLimit(25);
    }
  };

  const PreviousPage = () => {
    if(page !== 1){
      setPage(page - 1);
      setLimit(limit - 24);
    }else if(page === 1){
      setPage(maxPages);
      setLimit(1009);
    }
  };

  const window = 
    <div className="PokemonContainer" ref={searchContainerWidthRef} style={resize.card}>
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
    <div className="Background">
      <img src={logo} alt="Pokemon logo" className="Logo" />
      <div className="SearchTab" style={{width: `${searchWidth}px`}}>
        {inputs}
        {pageSelector}
      </div>
        <div style = {resize.scroll}>
          {window}
        </div>
    </div>
  );
}

export default Pokedex;