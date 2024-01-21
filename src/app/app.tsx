import HomePage from "components/HomePage";
import Pokedex from "components/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/find" element={<Pokedex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
