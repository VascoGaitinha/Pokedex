import axios from "axios";
import { useEffect, useState } from "react";
let PokemonCard = (props) =>{

    const {url,Json_Url,update, setUpdate,setPokemonInfo,setInfoLoaded,myPokemonList} = props;

    const [thisPokemon, setThisPokemon] = useState({})
    const [thisPokemonLoading, setThisPokemonLoading] = useState(true)

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setThisPokemon(response.data)
            setThisPokemonLoading(false)
        })
    },[url])

    const clickAdd = () =>{
        if(myPokemonList.length <6){
        axios.post(Json_Url, thisPokemon)
        setUpdate(!update)
        }
    }

    const mouseEnter = (x) =>{
        setPokemonInfo(x)
        setInfoLoaded(true)
    }

    const mouseLeave = () =>{
        setInfoLoaded(false)
    }

    return( // Rendering a pokemon card with info from all pokemons on allPokemonList
        <div onMouseDown={clickAdd} className="pokemon-card" onMouseEnter={()=> mouseEnter(thisPokemon)} onMouseLeave={mouseLeave}>
            {thisPokemonLoading? (<h2>Loading</h2>): <div>
                <div>
                    <img src={thisPokemon.sprites.front_default}></img>
                </div>
                <div>
                    <h2>{thisPokemon.name.toUpperCase()}</h2>
                </div>
            </div>}
        </div>
    )
}
export default PokemonCard