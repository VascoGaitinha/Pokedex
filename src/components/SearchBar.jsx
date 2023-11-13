import { useState } from "react";

const SearchBar = (props) => {

    const {allPokemonList, setAllPokemonList,defaultPokemonList} = props;

    const filterList = (searched) => {
        setAllPokemonList(defaultPokemonList)
        const filteredList = allPokemonList.filter((pokemon)=>{
            return pokemon.name.toLowerCase().includes(searched.toLowerCase())
        })
        setAllPokemonList(filteredList)
        searched.length===0 && setAllPokemonList(defaultPokemonList)
        console.log(allPokemonList)
        console.log(defaultPokemonList)
        }
    

    return(
        <div className="search-bar">
            <input type="text" placeholder="search..."
            onChange={(e) => filterList(e.target.value)}
            />
        </div>
    )
}

export default SearchBar