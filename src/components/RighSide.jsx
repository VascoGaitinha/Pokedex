import PokemonCard from "./pokemonCard";

let RightSide = (props) =>{

    const{allPokemonList,Json_Url, update, setUpdate} = props;

    return(
        <div>
        <h1>Right Side</h1>
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
    )
}

export default RightSide