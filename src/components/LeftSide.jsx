import axios from "axios"
import { useState,useEffect } from "react";

let LeftSide = (props) =>{
    const {myPokemonList, setMyPokemonList,Json_Url,update, setUpdate} = props;
   
    const[myListLoading, setmyListLoading] = useState(true)
    const[rename, setRename] = useState("")

    useEffect(()=>{
        axios.get(Json_Url)
        .then((response) => {
            setMyPokemonList(response.data);
            setmyListLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

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
        console.log(input)
        console.log(pokemonName)
        input.style.display ="none"
        pokemonName.style.display ="block"
    }

    const showInput = (name) => {
        let input = document.getElementById(`rename-${name}`)
        let pokemonName = document.getElementById(`left-pokemon-name-${name}`)
        console.log(input)
        console.log(pokemonName)
        input.style.display ="block"
        pokemonName.style.display ="none"
    }

      return(
        <div>
        {myListLoading && <h1>.:Loading:.</h1>}
        {!myListLoading &&
        <div>
        <h1>Left Side</h1>
        {myPokemonList.map((pokemon, index)=>{
            return(
                <div key={index}>
                    <p id={`left-pokemon-name-${pokemon.name}`}>{pokemon.name.toUpperCase()}</p>
                    <input 
                    id={`rename-${pokemon.name}`}
                    style={{display :"none"}}
                    onChange={(e) => setRename(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && clickRename(pokemon.id, pokemon)}
                    className="left-pokemon-name-input" type="text" placeholder={pokemon.name}></input>
                    <button onClick={ ()=> clickRemove(pokemon.id)}>-</button>
                    <button onClick={() => showInput(pokemon.name)}>R</button>
                </div> 
                )
        })} 
        </div>}
        </div>
    )
}

export default LeftSide