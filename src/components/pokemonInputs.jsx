import "../css/pokemonInputs.css";

import Button from "./buttons";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import axios from "axios";

function PokemonInputs({ searchPokemon = () => {}, initialState }) {

  const[search,setSearch] = useState("")

  const searchHandler = (pokemon = "") => {
    if(pokemon !== ""){
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => searchPokemon([response]))
        .catch((err)=>console.log(err))
    }
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="Tab">
      <input 
        className="TabInput" 
        placeholder="Busque Nome ou ID" 
        value={search} 
        onChange={(e)=>onChangeHandler(e)}
        />
      <Button children={<FaSearch />} fn={()=>searchHandler(search.toLowerCase())}/>
    </div>
  );
}

export default PokemonInputs;
