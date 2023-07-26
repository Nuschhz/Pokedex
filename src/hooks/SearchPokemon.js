import axios from "axios";

export const SearchPokemon = ({ pokemon, fn = () => {} }) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((response) => fn(response))
    .catch(fn(`Pokemon ${pokemon} not Found`));
};
