import { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import InfoPage from './InfoPage'

function HomePage(props) {


  const Api_Url="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=645"
  const Json_Url="https://pokedexbackend.onrender.com/pokemons"

  const [loading, setLoading] = useState(true)
  const [allPokemonList, setAllPokemonList] = useState({})
  const [defaultPokemonList, setDefaultPokemonList] = useState({})
  const [myPokemonList,setMyPokemonList] = useState({})
  const [update, setUpdate] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState({})
  const [infoLoaded, setInfoLoaded] = useState(false)

  const {username} = props;



  useEffect(()=>{ //SETTING ALL POKEMON LIST FROM API
    axios.get(Api_Url)
      .then((response)=>{
        setAllPokemonList(response.data.results)
        setDefaultPokemonList(response.data.results)
        setLoading(false)
      })
      .catch((error)=> {console.log(error)})

  },[])

  useEffect(() => {
    // Function to start the music
    const startMusic = () => {
      const audioElement = document.getElementById('myAudio');
      if (audioElement) {
        audioElement.play();
      }
    };

    startMusic();
  }, []);
  //_______________________________________________________
  return (
    <div>
      <div style={{display: 'none'}}>
        <audio id="myAudio" autoPlay loop>
          <source src="././public/pokedex_soundtrack.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      {loading && (<h1>.: LOADING :.</h1>)}
      {!loading &&
        (<div className="main-container">
            <LeftSide
            myPokemonList={myPokemonList}
            setMyPokemonList={setMyPokemonList}
            Json_Url={Json_Url}
            setUpdate={setUpdate}
            update={update}
            username={username}
            setPokemonInfo={setPokemonInfo}
            setInfoLoaded={setInfoLoaded}
            />
            <InfoPage pokemonInfo={pokemonInfo} infoLoaded={infoLoaded}/>
            <RightSide
            allPokemonList={allPokemonList}
            setAllPokemonList={setAllPokemonList}
            Json_Url={Json_Url}
            update={update}
            setUpdate={setUpdate}
            defaultPokemonList={defaultPokemonList}
            setPokemonInfo={setPokemonInfo}
            setInfoLoaded={setInfoLoaded}
            myPokemonList={myPokemonList}
            />
        </div>)}
    </div>
  )
}

export default HomePage
