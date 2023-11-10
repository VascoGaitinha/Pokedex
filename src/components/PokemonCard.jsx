import axios from "axios";
import { useEffect, useState } from "react";
let PokemonCard = (props) =>{

    const {url,Json_Url,update, setUpdate} = props;

    const [thisPokemon, setThisPokemon] = useState({})

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setThisPokemon(response.data)
        })
    },[])

    const clickAdd = () =>{
        axios.post(Json_Url, thisPokemon)
        setUpdate(!update)
        console.log(update)

    }

    return( // Rendering a pokemon card with info from all pokemons on allPokemonList
        <div>
            {thisPokemon.name}
            <button onClick={clickAdd}>+</button>
        </div>
    )
}
export default PokemonCard