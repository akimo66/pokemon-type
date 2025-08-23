// pokemonSearch.jsx
const PokemonSearch = ({ search, setSearch }) => {
    return (
        <div style={{ padding: "16px" }}>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={search}
                onChange={(e) =>{ setSearch(e.target.value) 
                     console.log(e.target.value)}}
                style={{ padding: "8px", width: "100%", marginBottom: "16px" }}
            />
        </div>
    );
};

export default PokemonSearch;

