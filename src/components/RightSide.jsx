import SearchBar from "./SearchBar";
import PokemonCard from "./pokemonCard";

const RightSide = (props) =>{

    const{allPokemonList, setAllPokemonList,Json_Url, update, setUpdate, } = props;

    return(
        <div>
        <h1>Pokemon List</h1>
        <SearchBar allPokemonList={allPokemonList} setAllPokemonList={setAllPokemonList}/>
        <div className="pokemon-card-list-right">
        {allPokemonList.map((pokemon,index)=>{ // Map All Pokemons in list and passing URL to PokemonCard
            return(
                <PokemonCard 
                key={index}
                url={pokemon.url} 
                Json_Url={Json_Url}
                setUpdate = {setUpdate}
                update = {update}
                />
            )
        })}
        </div>
        </div>
    )
}

export default RightSide