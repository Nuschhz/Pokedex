import "../css/pokemonInputs.css";

import Button from "./buttons";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import axios from "axios";

function PokemonInputs({ searchPokemon = () => {}, initialState}) {

  const[search,setSearch] = useState("")

  const searchHandler = (pokemon = "") => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => searchPokemon([response]))
        .catch((err)=>console.log(err))
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value === ""){
      searchPokemon(initialState)
    }
  }
  const keyDownHandler = (e) => {
    if(e.key === "Enter"){
      searchHandler(search.toLowerCase())
    }
  }

  return (
    <div className="Tab">
      <input 
        className="TabInput" 
        placeholder="Busque Nome ou ID" 
        value={search} 
        onChange={(e)=>onChangeHandler(e)}
        onKeyDown={(e)=>keyDownHandler(e)}
        />
      <Button children={<FaSearch />} fn={()=>searchHandler(search.toLowerCase())}/>
    </div>
  );
}

export default PokemonInputs;
