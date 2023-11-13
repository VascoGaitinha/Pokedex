const SearchBar = (props) => {

    const {allPokemonList} = props;

    return(
        <div className="search-bar">
            <input type="text" placeholder="search..."/>
        </div>
    )
}

export default SearchBar