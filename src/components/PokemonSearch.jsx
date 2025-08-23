function PokemonSearch({search,setSearch}) {
    return(
        <div style={{padding:'16px'}}>
            <input 
            type="text"
            placeholder="Search Pokemon"
            style={{padding:"2px", width:'100%'}}
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
             />
        </div>
    )
}

export default PokemonSearch