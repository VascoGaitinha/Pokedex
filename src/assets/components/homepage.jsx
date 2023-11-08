import PokeDex from "./myPokedex"
import PokemonList from "./pokemonList"
import { useState } from "react"


const HomePage = () => {
const [mouseOn,setMouseOn] = useState(false)

    return(
        <div className="main-container">
            <PokeDex mouseOn={mouseOn} setMouseOn={setMouseOn}/>
            <PokemonList mouseOn={mouseOn} setMouseOn={setMouseOn} />
        </div>
    )
}

export default HomePage