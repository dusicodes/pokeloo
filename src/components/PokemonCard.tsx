import { useEffect, useState } from "react";
import axios from "axios";
function PokemonCard() {
  const [pokemon, setPokemon] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setPokemon(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-auto p-4 bg-white rounded-xl">
        <input
          className="rounded-xl"
          placeholder="Enter a Pokemon"
          type="text"
        />
      </div>
      <article className="h-[600px] w-[900px] bg-white rounded-3xl flex flex-row justify-between"></article>
    </>
  );
}

export default PokemonCard;
