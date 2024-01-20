import LandingHeaderAnimation from "./LandingHeaderAnimation";
function LandingHeader() {
  LandingHeaderAnimation();
  return (
    <header
      id="landing-header"
      className=" w-screen px-10 py-3 flex z-40 flex-row gap-28 absolute text-center justify-center"
    >
      <div className="flex items-center text-lg font-hero">
        <a href="/">PokeLoo</a>
      </div>
      <nav className="flex  justify-center">
        <ul className=" flex flex-row justify-between text-lg [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:px-2 [&>li>a]:inline-block [&>li>a]:py-2">
          <li className=" ">
            <a href="#">Home</a>
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

      <nav className="flex  justify-end">
        <ul className=" flex flex-row justify-between text-lg [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:px-2 [&>li>a]:inline-block [&>li>a]:py-2">
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
      <div
        id="menu-backdrop"
        className={`
          absolute bg-black/5 backdrop-blur-lg rounded
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-[var(--height)]
          transition-all duration-500
          ease-in-out opacity-0 -z-10
        `}
      ></div>
    </header>
  );
}

export default LandingHeader;
