import axios from "axios"
import { useState,useEffect } from "react";

let LeftSide = (props) =>{
    const {myPokemonList, setMyPokemonList,Json_Url,update, setUpdate} = props;
   
    const[myListLoading, setmyListLoading] = useState(true)

    const[idToDelete, setIdToDelete] = useState()

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
    const clickRename = () =>{
        let name = document.getElementsByName
        
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
                    <p className="left-pokemon-name">{pokemon.name}</p>
                    <input className="left-pokemon-name-input" type="text" placeholder={pokemon.name}></input>
                    <p>{pokemon.id}</p>
                    <button onClick={ ()=> clickRemove(pokemon.id)}>-</button>
                    <button onClick={ ()=> clickRename(pokemon.name)}>R</button>
                    </div>
                    )
        })} 

        </div>}
        </div>

    )
}

export default LeftSide