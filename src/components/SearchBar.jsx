import axios from "axios";

const SearchBar = (props) => {

    const {allPokemonList, setAllPokemonList,defaultPokemonList, myPokemonList, Json_Url,update, setUpdate} = props;
    const singlePokemon_url=("https://pokeapi.co/api/v2/pokemon/")
    let randomIndexes = [];
    let randomPokemons = [];

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
                }
        
                if (randomIndexes.length !== 0) {
                    const requests = randomIndexes.map((id) => {
                        return axios.get(`${singlePokemon_url}${id}`)
                            .then((response) => {
                                console.log("Posting ", response.data.name);
                                return axios.post(Json_Url, response.data);
                            })
                            .catch((error) => {
                                console.error('Error posting data:', error);
                            });
                    });
                
                    Promise.all(requests)
                        .then(() => {
                            console.log(`Completed ${randomIndexes.length} updates`);
                            setUpdate(!update);
                        })
                        .catch((error) => {
                            console.error('Error in one or more requests:', error);
                        });
                }
                
                    }
                }
    

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