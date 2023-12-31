import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const RightSide = (props) =>{

    const{allPokemonList, setAllPokemonList,Json_Url, update, setUpdate,defaultPokemonList,setPokemonInfo,setInfoLoaded,myPokemonList } = props;
    
    return(
        <div className="right-container">
        <h1>POKEMON LIST</h1>
        <SearchBar 
        allPokemonList={allPokemonList} 
        setAllPokemonList={setAllPokemonList} 
        defaultPokemonList={defaultPokemonList}
        myPokemonList={myPokemonList}
        Json_Url={Json_Url}
        update={update}
        setUpdate={setUpdate}
        />
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
                myPokemonList={myPokemonList}
                />
            )
        })}
        </div>
        </div>
    )
}

export default RightSide