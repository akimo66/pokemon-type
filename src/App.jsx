import React, { useEffect, useState } from "react";
import PokemonList from './components/PokemonList'
import Filter from './components/Filter'

function App() {
  const[pokemonList,setPokemonList]=useState([])
  const[filterType,setFilterType]=useState('all')
  useEffect(()=>{

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setPokemonList(data.results)
    })
  },[])

  if(!pokemonList.length) return <p>loading</p>
  return(
    <div style={{textAlign:'center'}}>
      <h1>ポケモン図鑑</h1>
      <Filter onChange={setFilterType}/>
      <PokemonList pokemonList={pokemonList} filterType={filterType}/>
    </div>
  )
}

export default App

