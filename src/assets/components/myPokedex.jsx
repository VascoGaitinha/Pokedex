import axios from "axios";
import { useState, useEffect } from "react";

let PokeDex = (props) =>{
    const{mouseOn, setMouseOn,pokemon} = props;
    const [myPokedex, setMyPokedex] = useState({})
    const [loading,setLoading] = useState(true)
    const myList = "http://localhost:5005/pokemons"
 
    useEffect(()=>{
        axios.get(myList)
        .then((response)=>{
            setMyPokedex(response.data)
            setLoading(false)
            console.log(myPokedex)
        })
    },[])

    return(
       <>   
            {!mouseOn && loading &&(
                <div className="my-list">
                    {<h1>
                        Loading your PokeList ...
                    </h1>
                    }
                </div>
            )}
            {!mouseOn && !loading &&(
                <div className="my-list">
                    {myPokedex.map((pokemon, )=> {
                        return( 
                            <div key={pokemon.id}>
                                {pokemon.species.name}
                            </div>)
                    })}
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