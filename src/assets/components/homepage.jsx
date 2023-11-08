import PokeDex from "./myPokedex"
import PokemonList from "./pokemonList"

const HomePage = () => {
    return(
        <div className="main-container">
            <PokeDex />
            <PokemonList />
        </div>
    )
}

export default HomePage