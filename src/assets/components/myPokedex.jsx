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
                <div className="pokemon-preview">
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <div className="pokemon-details">
                        <img className="pokemon-icon-preview" src={pokemon.sprites.other.dream_world.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
                        <div className="pokemon-details-text">
                           <p>ID:{pokemon.id} </p>
                           <p>Outro</p>
                           <p>Outro</p>
                        </div>
                    </div>
                </div>

            )}
        </>

    )
}

export default PokeDex