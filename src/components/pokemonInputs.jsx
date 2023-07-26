import "../css/pokemonInputs.css";

import Button from "./buttons";
import { FaSearch } from "react-icons/fa";

import { useState,} from "react";

function PokemonInputs({ searchPokemon = () => {} }) {

  const [search,setSearch] = useState("");

  return (
    <div className="Tab">
      <Button children={<FaSearch />}/>
      <input className="TabInput" placeholder="Busque Nome ou ID" value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  );
}

export default PokemonInputs;
