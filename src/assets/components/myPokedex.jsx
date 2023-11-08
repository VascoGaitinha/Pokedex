let PokeDex = (props) =>{
    const{mouseOn, setMouseOn,pokemon} = props;


    return(
       <>
            {!mouseOn && (
                <div className="my-list">
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                 </div>
            )}
            {mouseOn &&(
                <div className="my-list">
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <img className="pokemon-icon-big" src={pokemon.sprites.other.dream_world.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
                </div>

            )}
        </>

    )
}

export default PokeDex