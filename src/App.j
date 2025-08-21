import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filterType, setFilterType] = useState("all");//

  // 最初に151匹のポケモンを取得
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())//
      .then((data) => {
        // ここでは name と url のリストが取れる
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>ポケモン図鑑</h1>
      <Filter onChange={setFilterType} />
      <PokemonList pokemonList={pokemonList} filterType={filterType} />
    </div>
  );
}

export default App;
