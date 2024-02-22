import { useState } from "react";
import { Button } from "@chakra-ui/react";

function PokemonFind() {
  // const [pokemon, setPokemon] = useState([]);
  const [userInput, setUserInput] = useState<string>("charmander");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");

  const handleSearch = (formData) => {
    const query = formData.get("pokemonInput");
    alert(`You searched for '${query}'`);
  };

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
    <section className="flex flex-row gap-10">
      <article className="h-[600px] w-[900px] bg-white rounded-3xl flex flex-row flex-grow">
        <div className="">
          <img className="h-[512px] w-[450px]" src={pokemonImage}></img>
        </div>
        <div className="pt-6 w-[50%] text-center">
          <h1 className=" font-bold text-4xl capitalize">{pokemonName}</h1>
        </div>
      </article>
      <article className="w-auto p-4 bg-white rounded-xl">
        <form
          action={handleSearch}
          className="flex flex-row gap-3 justify-between"
        >
          <input
            className="rounded-xl"
            placeholder="Enter a Pokemon"
            name="pokemonInput"
          />
          <Button
            type="submit"
            onClick={handleSearch}
            colorScheme="teal"
            w={20}
          >
            Search
          </Button>
        </form>
      </article>
    </section>
  );
}

export default PokemonFind;
