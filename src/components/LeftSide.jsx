import axios from "axios"
import { useState,useEffect } from "react";

const LeftSide = (props) =>{
    const {myPokemonList, setMyPokemonList,Json_Url,update, setUpdate, username} = props;

    const[myListLoading, setmyListLoading] = useState(true)
    const[rename, setRename] = useState("")
    console.log(myPokemonList.length)

    useEffect(()=>{
        axios.get(Json_Url)
        .then((response) => {
            setMyPokemonList(response.data);
            setmyListLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
console.log(username)
    },[update])

    const clickRemove = (i) => {
        axios.delete(`${Json_Url}/${i}`)
        .then(setUpdate(!update))
        .catch((error)=>console.log("ERRROR!!",error))
    }

    const clickRename = (id, pokemon) =>{
        let newPokemon = {...pokemon}
        newPokemon.name = rename
        axios.put(`${Json_Url}/${id}`, newPokemon)
        .then(setUpdate(!update))
        let input = document.getElementById(`rename-${pokemon.name}`)
        let pokemonName = document.getElementById(`left-pokemon-name-${pokemon.name}`)
        input.style.display ="none"
        pokemonName.style.display ="block"
    }

    const showInput = (name) => {
        let input = document.getElementById(`rename-${name}`)
        let pokemonName = document.getElementById(`left-pokemon-name-${name}`)
        input.style.display ="block"
        pokemonName.style.display ="none"
    }

      return(
        <div className="left-container">
        {myListLoading && <h1>.:Loading:.</h1>}
        {!myListLoading &&
        <div>
            <h1>{username.toUpperCase()} POKEDEX</h1>

            <div className="pokemon-card-list-left">
            {myPokemonList.map((pokemon, index)=>{
                return(
                    <div key={index} className="left-pokemon-card">
                        <div>
                            <h2 onDoubleClick={() => showInput(pokemon.name)} id={`left-pokemon-name-${pokemon.name}`}>{pokemon.name.toUpperCase()}</h2>
                            <input
                            id={`rename-${pokemon.name}`}
                            style={{display :"none"}}
                            onChange={(e) => setRename(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && clickRename(pokemon.id, pokemon)}
                            className="left-pokemon-name-input" type="text" placeholder={pokemon.name}>

                            </input>
                        </div>
                        <div onClick={ ()=> clickRemove(pokemon.id)} className="left-image-and-buttons">
                            <div>
                                <img className="left-pokemon-item" src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                            </div>

                        </div>
                    </div>
                    )
            })}
            </div>
            </div>}
        </div>
    )
}

export default LeftSide