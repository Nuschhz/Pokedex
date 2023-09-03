import axios from "axios";
import { useEffect } from "react";

export const useGetPokemons = (
  offset,
  limit,
  fn = () => {},
  page = () => {}
) => {
  useEffect(() => {
    let endpoints = [];
    for (let i = offset; i < limit; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => {
        fn(response);
        page(response);
      })
      .catch((err) => console.log(err));
  }, [fn, limit, offset, page]);
};
