import pikachuImage from "./images/pikachu_image.jpeg";

function Showcase() {
  const favPokemon = "Pikachu";
  const pokeCharacteristics = {
    type: "Electric",
    move: "Thunderbolt",
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={pikachuImage} alt="Pikachu" />
      <h2>
        Pikachu's type is{" "}
        <span style={{ backgroundColor: "yellow", color: "black" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "#ffffff", color: "#B8860B" }}>
          {pokeCharacteristics.move}
        </span>
        .
      </h2>
    </div>
  );
}

export default Showcase;
