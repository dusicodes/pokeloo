import LandingHeader from "./LandingHeader";
import PokemonCard from "./PokemonCard";

function Pokedex() {
  return (
    <>
      <LandingHeader />
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-[#f2fcf6] gap-8">
        <PokemonCard />
      </section>
    </>
  );
}

export default Pokedex;
