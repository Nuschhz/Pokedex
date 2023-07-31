import "../css/pokemonInputs.css";

import Button from "./buttons";
import { FaSearch } from "react-icons/fa";

import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import axios from "axios";

function PokemonInputs({ searchPokemon = () => {}, initialState}) {

  const[search,setSearch] = useState("");

  const searchHandler = (pokemon = "") => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => {
          toast.success(`${pokemon[0].toUpperCase() + pokemon.slice(1)}`)
          searchPokemon([response])
        })
        .catch((err)=>{
          if(err){
            toast.error(`O pokemon "${pokemon[0].toUpperCase() + pokemon.slice(1)}" não foi encontrado.`);
          }
        });
      };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value === ""){
      searchPokemon(initialState);
    }
  }
  
  const keyDownHandler = (e) => {
    if(e.key === "Enter"){
      searchHandler(search.toLowerCase());
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
      <Button children={<FaSearch />} onClick={()=>searchHandler(search.toLowerCase())}/>
      <ToastContainer/>
    </div>
  );
}

export default PokemonInputs;
