function LandingHeader() {
  return (
    <header className=" w-screen px-10 py-3 flex justify-between flex-grow z-40">
      <div className="flex items-center text-lg font-sans ">
        <a href="/">PokeLoo</a>
      </div>
      <nav>
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
        </ul>
      </nav>

      <nav className="flex  justify-end">
        <ul className=" flex flex-row justify-between text-lg [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:px-2 [&>li>a]:inline-block [&>li>a]:py-2">
          <li>
            <a href="#">PokeApi</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
