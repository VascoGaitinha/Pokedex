import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css"
const Image = (props) => {
    const [pokemon,setPokemon] = useState({})
    const [loading,setLoading] = useState(true)

    let source = "";

    useEffect(()=>{

        const {url} = props;
        axios.get(url)
        .then((response)=>{
            setPokemon(response.data)
            setLoading(false)
         })
        .catch((error) => console.log(error))
    },[])
    
    

    return(
        <div className="pokemon-card">
        {loading && <p>[!]</p>}
        {!loading && (<div>
            <div className="icon-div">
                <img className="pokemon-icon" src={pokemon.sprites.front_default.slice(pokemon.sprites.front_default.lastIndexOf("https://"))}/>
            </div>
            <p>{pokemon.name.toUpperCase()}</p>
            <div className="card-buttons">
                <button>Add</button>
                <button>Info</button>
            </div>
            </div>)}
        </div>
    )
}

export default Image