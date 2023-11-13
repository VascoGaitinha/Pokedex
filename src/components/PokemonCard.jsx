import axios from "axios";
import { useEffect, useState } from "react";
let PokemonCard = (props) =>{

    const {url,Json_Url,update, setUpdate} = props;

    const [thisPokemon, setThisPokemon] = useState({})
    const [thisPokemonLoading, setThisPokemonLoading] = useState(true)

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setThisPokemon(response.data)
            setThisPokemonLoading(false)
        })
    },[])

    const clickAdd = () =>{
        axios.post(Json_Url, thisPokemon)
        setUpdate(!update)
    }

    return( // Rendering a pokemon card with info from all pokemons on allPokemonList
        <div className="pokemon-card">
            {thisPokemonLoading && <h1>Loading</h1>}
            {!thisPokemonLoading && 
            <div>
                <div>
                    <img src={thisPokemon.sprites.front_default}></img>
                </div>
                <div>
                    <h2>{thisPokemon.name.toUpperCase()}</h2>
                </div>
            </div>}
            <button onClick={clickAdd}>+</button>
        </div>
    )
}
export default PokemonCard