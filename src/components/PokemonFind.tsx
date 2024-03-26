import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";

function PokemonFind() {
  // const [pokemon, setPokemon] = useState([]);
  const [userInput, setUserInput] = useState<string>("");
  // const [userClickInput, setUserClickInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");
  const [searchResults, setSearchResults] = useState<[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + userInput)
      .then((response) => response.json())
      .then((data) => {
        const { name, sprites } = data;
        const { front_default } = sprites;
        setIsLoading(true);
        setPokemonName(name);
        setPokemonImage(front_default);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    e.preventDefault();
  };

  fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0`)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      console.log(results);
      const resultsData = results.filter((pokemon) => {
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

  // const handleResultClick = (value: string) => {
  //   setUserInput(value);
  //   // setUserClickInput(value);
  // };

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
        <div className={isLoading === true ? "hidden" : "flex h-auto w-full"}>
          <div className="">
            <img className="h-[512px] w-[450px]" src={pokemonImage}></img>
          </div>
          <div className="pt-6 w-[50%] text-center">
            <h1 className=" font-bold text-4xl capitalize">{pokemonName}</h1>
          </div>
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
              <div className="rounded-xl hover:bg-slate-100 p-4" key={idx}>
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
