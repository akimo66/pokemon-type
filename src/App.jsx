import React, { useEffect, useState } from "react";
import PokemonList from './components/PokemonList'
import Filter from './components/Filter'
import PokemonSearch from './components/PokemonSearch'


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [searchWord, setSearchWord] = useState('')


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  if (!pokemonList.length) return <p>loading</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>ポケモン図鑑</h1>
      <Filter onChange={setFilterType} />
      <PokemonSearch search={searchWord} setSearch={setSearchWord} />
      <PokemonList
        pokemonList={pokemonList.filter((p) => {
          return p.name.toLowerCase().includes(searchWord.toLowerCase())
        })}


        filterType={filterType}
      />
    </div>
  );
}

export default App;
