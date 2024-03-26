import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import PokemonOutputInfo from "./PokemonOutputInfo";

function PokemonFind() {
  interface Pokemon {
    name: string;
  }

  interface PokemonStat {
    base_stat: number;
  }
  // const [pokemon, setPokemon] = useState([]);
  const [userInput, setUserInput] = useState<string>("");
  // const [userClickInput, setUserClickInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonImage, setPokemonImage] = useState<string>("");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonSpeed, setPokemonSpeed] = useState<string>("");
  const [pokemonDefense, setPokemonDefense] = useState<string>("");
  const [pokemonAttack, sePokemonAttack] = useState<string>("");
  const [pokemonHp, sePokemonHp] = useState<string>("");

  const [searchResults, setSearchResults] = useState<[]>([]);

  const outputPokemonData = (pokemonInput: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemonInput)
      .then((response) => response.json())
      .then((data) => {
        const { name, sprites, stats } = data;

        stats.map((stat: PokemonStat) => {
          console.log(stat.base_stat);
          if (stat.stat.name == "hp") {
            console.log(stat.base_stat);
          }
        });
        const { front_default } = sprites;
        setPokemonName(name);
        setPokemonImage(front_default);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0`)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;

      const resultsData = results.filter((pokemon: Pokemon) => {
        return (
          userInput &&
          pokemon &&
          pokemon.name &&
          pokemon.name.toLowerCase().includes(userInput)
        );
      });
      setSearchResults(resultsData);
    })
    .catch((error) => console.error(error));

  const handleSubmit = (e: React.FormEvent) => {
    outputPokemonData(userInput);
    e.preventDefault();
  };

  const handleResultClick = (value: string) => {
    setUserInput(value);
    outputPokemonData(value);
  };

  return (
    <section className="flex flex-row gap-10 ">
      <article className="h-[600px] w-[900px] bg-white rounded-3xl flex flex-row flex-grow">
        <div
          className={
            isLoading === true
              ? "h-auto w-full flex items-center justify-center"
              : "hidden"
          }
        >
          Waiting for pokemon request... {isLoading && <Spinner />}
        </div>
        <div className={isLoading === true ? "hidden" : "flex h-auto w-full "}>
          <PokemonOutputInfo
            pokemonImage={pokemonImage}
            pokemonName={pokemonName}
          />
        </div>
      </article>
      <article className="flex flex-col h-[600px] w-auto p-4 bg-white rounded-xl gap-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row gap-3 justify-between"
        >
          <input
            className="rounded-xl p-4"
            placeholder="Enter a Pokemon"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button type="submit" colorScheme="teal" h={"auto"} w={20}>
            Search
          </Button>
        </form>

        <div className=" flex flex-col gap-2 h-auto scroll overflow-y-scroll">
          {searchResults.map((results, idx) => {
            return (
              <div
                className="rounded-xl hover:bg-slate-100 cursor-pointer p-4"
                key={idx}
                onClick={() => handleResultClick(results.name)}
              >
                {results.name}
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default PokemonFind;
