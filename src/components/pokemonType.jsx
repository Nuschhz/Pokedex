import "../css/pokemonType.css";

function PokemonType({ mainType = "", secType }) {
  const typeColors = {
    normal: {
      backgroundColor: "#ACACAC",
      color: "white",
      borderColor: "#A2A2A2",
    },
    fire: {
      backgroundColor: "#DF2727",
      color: "white",
      borderColor: "#D72020",
    },
    water: {
      backgroundColor: "#3860D0",
      color: "white",
      borderColor: "#305ACC",
    },
    grass: {
      backgroundColor: "#46D544",
      color: "white",
      borderColor: "#3BD239",
    },
    flying: {
      backgroundColor: "#96CDFF",
      color: "white",
      borderColor: "#80C1FF",
    },
    fighting: {
      backgroundColor: "#FF8147",
      color: "white",
      borderColor: "#FF7637",
    },
    poison: {
      backgroundColor: "#94849B",
      color: "white",
      borderColor: "#8C7C94",
    },
    electric: {
      backgroundColor: "#FFE854",
      color: "white",
      borderColor: "#FFE641",
    },
    ground: {
      backgroundColor: "#AE8B60",
      color: "white",
      borderColor: "#AA8557",
    },
    rock: {
      backgroundColor: "#96764F",
      color: "white",
      borderColor: "#8F704B",
    },
    psychic: {
      backgroundColor: "#C86FC9",
      color: "white",
      borderColor: "#C264C4",
    },
    ice: {
      backgroundColor: "#B6C5F7",
      color: "white",
      borderColor: "#A2B6F5",
    },
    bug: {
      backgroundColor: "#C5D348",
      color: "white",
      borderColor: "#C1D03B",
    },
    ghost: {
      backgroundColor: "#4F3782",
      color: "white",
      borderColor: "#4A337B",
    },
    steel: {
      backgroundColor: "#77C7D1",
      color: "white",
      borderColor: "#6AC1CC",
    },
    dragon: {
      backgroundColor: "#073B4C",
      color: "white",
      borderColor: "#073747",
    },
    dark: {
      backgroundColor: "#1B1B1B",
      color: "white",
      borderColor: "#1B1B1B",
    },
    fairy: {
      backgroundColor: "#FFBED2",
      color: "white",
      borderColor: "#FFA7C1",
    },
  };

  return (
    <div className="TypeContainer">
      <div className="Types" style={typeColors[mainType]}>
        {mainType[0].toUpperCase() + mainType.slice(1)}
      </div>
      {secType ? (
        <div className="Types" style={typeColors[secType]}>
          {secType[0].toUpperCase() + secType.slice(1)}
        </div>
      ) : null}
    </div>
  );
}

export default PokemonType;
