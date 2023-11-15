import axios from "axios";

const SearchBar = (props) => {

    const {allPokemonList, setAllPokemonList,defaultPokemonList, myPokemonList, Json_Url,update, setUpdate} = props;
    const singlePokemon_url=("https://pokeapi.co/api/v2/pokemon/")
    let randomIndexes = [];

    const filterList = (searched) => {
        setAllPokemonList(defaultPokemonList)
        const filteredList = allPokemonList.filter((pokemon)=>{
            return pokemon.name.toLowerCase().includes(searched.toLowerCase())
        })
        setAllPokemonList(filteredList)
        searched.length===0 && setAllPokemonList(defaultPokemonList)
        }

        const randomize = () => {
            let randomIndexes = [];
            
            if (myPokemonList.length < 6) {
                for (let i = 0; i < 6 - myPokemonList.length; i++) {
                    let rand = Math.floor(Math.random() * 649) + 1;
                    randomIndexes.push(rand);
                    console.log(randomIndexes);
                }
        
                if (randomIndexes.length !== 0) {
                    randomIndexes.forEach((id) => {
                        axios.get(`${singlePokemon_url}${id}`)
                            .then((response) => {
                                axios.post(Json_Url, response.data)
                                    .then(() => {
                                        console.log(`Posting ${response.data.name}`);
                                        setUpdate(!update);
                                    })
                                    .catch((error) => {
                                        console.error('Error posting data:', error);
                                    });
                            })
                            .catch((error) => {
                                console.error('Error fetching Pokemon data:', error);
                            });
                        });
                    }
                }
            };
    

    return(
        <div className="search-bar">
            <input type="text" placeholder="search..."
            onChange={(e) => filterList(e.target.value)}
            />
            <button onClick={randomize}>
                <img src="/dice.jpg" alt="Image Alt Text"/>
            </button>
        </div>
    )
}

export default SearchBar