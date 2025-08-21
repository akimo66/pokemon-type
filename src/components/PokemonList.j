import React, { useState, useEffect } from "react";

function PokemonList({ pokemonList, filterType }) {
  const [detailedList, setDetailedList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pokemonList.length) return;

    setLoading(true);

    // 各ポケモンの詳細データを取得
    Promise.all(pokemonList.map((p) => fetch(p.url).then((res) => res.json()))) //
      .then((details) => {
        if (filterType === "all") {
          setDetailedList(details);
        } else {
          const filtered = details.filter((pokemon) =>
            pokemon.types.some((t) => t.type.name === filterType)
          );
          setDetailedList(filtered);//
        }
        setLoading(false);
      });
  }, [pokemonList, filterType]);//pokemonListを依存関係に入れる理由はポケモンを複数匹入れるからその度に更新

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {detailedList.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            width: "180px",
            textAlign: "center",
          }}
        >
          <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            style={{ width: "150px" }}
          />
          <div>
            {pokemon.types.map((t) => (
              <span key={t.type.name} style={{ margin: "2px" }}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
