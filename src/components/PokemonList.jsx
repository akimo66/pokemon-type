import React, { useEffect, useState } from "react";
import PokemonColors from "./PokemonColors";

function PokemonList({ pokemonList, filterType }) {
  const [detailedList, setDetailedList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!pokemonList.length) {
      setLoading(false)
      return
    }
    setLoading(true)

    Promise.all(pokemonList.map((p) => fetch(p.url).then((res) => res.json())))
      .then((details) => {
        if (filterType === 'all') {
          setDetailedList(details)
        }
        else {
          const filtered = details.filter((pokemon) =>
            pokemon.types.some((t) => t.type.name === filterType))
          setDetailedList(filtered)
        }
      })
    .finally(()=>setLoading(false))
  } ,[pokemonList,filterType])

  if (loading) return <p>loading...</p>

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {detailedList.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            margin: '10px',
            width: '180px'
          }}>
          <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
          <img src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            style={{ width: "150px" }}
          />
          <div>
            {pokemon.types.map((t) => (
              <span key={t.type.name} style={{ margin: '2px',
                backgroundColor: PokemonColors[t.type.name], 
                color: "#fff",
               }}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      ))}

    </div>
  )

}

export default PokemonList