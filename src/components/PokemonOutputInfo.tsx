interface PokemonOutput {
  pokemonImage: string;
  pokemonName: string;
}
function PokemonOutputInfo({ pokemonImage, pokemonName }: PokemonOutput) {
  return (
    <>
      <div className=" place-self-center">
        <img className="h-[512px] w-[450px]" src={pokemonImage}></img>
      </div>
      <div className="pt-6 w-[50%] text-center">
        <h1 className=" font-bold text-4xl capitalize mt-6">{pokemonName}</h1>
      </div>
    </>
  );
}
export default PokemonOutputInfo;
