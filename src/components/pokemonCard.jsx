import "../css/pokemonCard.css";

import PokemonType from "./pokemonType";

function PokemonCard({
  pokemonName = "",
  pokemonNumber = "",
  types = "",
}) {
  
  if (pokemonNumber < 10) {
    pokemonNumber = `00${pokemonNumber}`;
  } else if (pokemonNumber < 100) {
    pokemonNumber = `0${pokemonNumber}`;
  }
  
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`

  return (
    <div className="CardContainer">
      <div className="CardTop">
        #{pokemonNumber}
        <div>{pokemonName[0].toUpperCase() + pokemonName.slice(1)}</div>
      </div>
      <div className="CardMiddle">
        <img 
          src={imageUrl} 
          alt={`${pokemonName} sprite`} 
          className="Image" 
        />
      </div>
      <div className="CardBottom">
        <PokemonType
          mainType={types[0].type.name}
          secType={types[1] ? types[1].type.name : null}
        />
      </div>
    </div>
  );
}

export default PokemonCard;
