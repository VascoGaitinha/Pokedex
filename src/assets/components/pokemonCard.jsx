import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css"
const PokemonCard = (props) => {
    const [pokemon,setPokemon] = useState({})
    const [loading,setLoading] = useState(true)
    const [hover, setHover] = useState(false);
    const {url, mouseOn, setMouseOn, pokemonToList, setPokemonToList} = props;

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setPokemon(response.data)
            setLoading(false)
         })
        .catch((error) => console.log(error))
    },[])
    
    const handleMouseEnter = () =>{
        console.log("MouseOn")
        setMouseOn(true)
        setHover(true)
        setPokemonToList(pokemon)

    }

    const handleMouseLeave = () =>{
        console.log("MouseOff")
        setMouseOn(false)
        setHover(false)
    }
    

    return(
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {loading && <p>[!]</p>}
        {!loading && !hover &&  (<div className="pokemon-card">
            <div className="icon-div">
                <img className="pokemon-icon" src={pokemon.sprites.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
            </div>
            <p>{pokemon.name.toUpperCase()}</p>
            <div className="card-buttons">
                <button>Add</button>
                <button>Info</button>
            </div>
            </div>)}

            {loading && hover &&(
                <div className="icon-div">
                    <p>Loading!</p>
                </div>)}
            {!loading && hover &&(
                <div className="icon-div">
                    <img className="pokemon-icon-big" src={pokemon.sprites.other.dream_world.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
                </div>)}
        </div>
    )
}

export default PokemonCard