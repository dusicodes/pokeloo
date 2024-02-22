import LandingHeader from "../components/LandingHeader";
import PokemonFind from "../components/PokemonFind";

function Pokedex() {
  return (
    <>
      <LandingHeader />
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-[#f7f9fb] gap-8">
        <PokemonFind />
      </section>
    </>
  );
}

export default Pokedex;
