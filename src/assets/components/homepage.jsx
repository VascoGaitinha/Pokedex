import PokeDex from "./myPokedex"
import PokemonList from "./pokemonList"
import { useState } from "react"


const HomePage = () => {
const [mouseOn,setMouseOn] = useState(false)
const [pokemon,setPokemon] = useState({})


    return(
        <div className="main-container">
            <PokeDex 
            mouseOn={mouseOn} 
            setMouseOn={setMouseOn}
            pokemon={pokemon}
            setPokemon={setPokemon}
            />
            <PokemonList 
            mouseOn={mouseOn} 
            setMouseOn={setMouseOn} 
            pokemon={pokemon}
            setPokemon={setPokemon}
            />
        </div>
    )
}

export default HomePage