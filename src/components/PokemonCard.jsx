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
        console.log(update)

    }

    !thisPokemonLoading && console.log(thisPokemon.sprites.front_default);

    return( // Rendering a pokemon card with info from all pokemons on allPokemonList
        <div>
            {thisPokemonLoading && <h1>Loading</h1>}
            {!thisPokemonLoading && <div><img src={thisPokemon.sprites.front_default}></img></div>}
            <div>
            {thisPokemon.name}
            </div>
            <button onClick={clickAdd}>+</button>
        </div>
    )
}
export default PokemonCard