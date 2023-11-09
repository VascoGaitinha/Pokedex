import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css"
const PokemonCard = (props) => {
    const [pokemon,setPokemon] = useState({})
    const [loading,setLoading] = useState(true)
    const [hover, setHover] = useState(false);
    const {url, mouseOn, setMouseOn, pokemonToList, setPokemonToList} = props;
    const myPokedex_URL = "http://localhost:5005/pokemons"
    

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

    const addFav = () => {
        const data = pokemon
        axios.post(myPokedex_URL, pokemon)
        .then(response => {console.log (response.data)})
        .catch(error => {
            // Handle error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with an error:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from server:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
            }
        })
    }
    

    return(
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {loading && <p>[!]</p>}
        {!loading && !hover &&  (
        <div className="pokemon-card">
            <div className="icon-div">
                <img className="pokemon-icon" src={pokemon.sprites.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
            </div>
            <p>{pokemon.name.toUpperCase()}</p>
        </div>)}

            {loading && hover &&(
                <div className="icon-div">
                    <p>Loading!</p>
                </div>)}
            {!loading && hover &&(
                <div className="icon-div">
                    <img className="pokemon-icon-big" src={pokemon.sprites.other.dream_world.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
                   <div>
                        <button>ADD</button>
                        <button onClick={addFav}>FAV</button>
                   </div>
                </div>)}
        </div>
    )
}

export default PokemonCard