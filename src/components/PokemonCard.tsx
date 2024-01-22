import { useState } from "react";

function PokemonCard() {
  // const [pokemon, setPokemon] = useState([]);
  const [userInput, setUserInput] = useState<string>("charmander");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");

  fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput)
    .then((response) => response.json())
    .then((data) => {
      const { name, sprites } = data;
      const { front_default } = sprites;

      setPokemonName(name);
      setPokemonImage(front_default);
    })
    .catch((error) => console.error(error));

  return (
    <>
      <div className="w-auto p-4 bg-white rounded-xl">
        <input
          className="rounded-xl"
          placeholder="Enter a Pokemon"
          type="text"
          name="pokemonInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <article className="h-[600px] w-[900px] bg-white rounded-3xl flex flex-row">
        <img className="h-[512px] w-[512px]" src={pokemonImage}></img>
        <div className="pt-6">
          <h1 className=" font-bold text-4xl capitalize">{pokemonName}</h1>
        </div>
      </article>
    </>
  );
}

export default PokemonCard;
