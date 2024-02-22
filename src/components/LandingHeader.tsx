// import LandingHeaderAnimation from "./LandingHeaderAnimation";
function LandingHeader() {
  // LandingHeaderAnimation(); // this don't work
  return (
    <header
      id="landing-header"
      className=" w-screen px-10 py-3 flex z-40 flex-row gap-28 absolute text-center justify-center"
    >
      <div className="flex items-center text-lg font-hero justify-center">
        <a href="/">PokeLoo</a>
      </div>

      <nav className="flex justify-center">
        <ul className="hidden md:visible md:flex  flex-row justify-between text-lg [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:px-2 [&>li>a]:inline-block [&>li>a]:py-2">
          <li className=" ">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="https://pokeapi.co/">PokeApi</a>
          </li>
        </ul>
      </nav>
      <nav className="md:hidden visible justify-start">
        <ul className=" flex flex-row justify-between text-lg transition-colors duration-500 font-medium px-2 py-2">
          <li>
            <a
              onClick={() => {
                return console.log("hi");
              }}
            >
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
