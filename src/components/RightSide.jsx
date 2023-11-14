import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const RightSide = (props) =>{

    const{allPokemonList, setAllPokemonList,Json_Url, update, setUpdate,defaultPokemonList,setPokemonInfo,setInfoLoaded } = props;

    return(
        <div className="right-container">
        <h1>Pokemon List</h1>
        <SearchBar allPokemonList={allPokemonList} setAllPokemonList={setAllPokemonList} defaultPokemonList={defaultPokemonList}/>
        <div className="pokemon-card-list-right">
        {allPokemonList.map((pokemon,index)=>{ // Map All Pokemons in list and passing URL to PokemonCard
            return(
                <PokemonCard 
                key={index}
                url={pokemon.url} 
                Json_Url={Json_Url}
                setUpdate = {setUpdate}
                update = {update}
                setPokemonInfo={setPokemonInfo}
                setInfoLoaded={setInfoLoaded}
                />
            )
        })}
        </div>
        </div>
    )
}

export default RightSide