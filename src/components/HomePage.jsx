import { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import InfoPage from './InfoPage'

function HomePage() {

  const Api_Url="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  const Json_Url="http://localhost:5005/pokemons"

  const [loading, setLoading] = useState(true)
  const [allPokemonList, setAllPokemonList] = useState({})
  const [myPokemonList,setMyPokemonList] = useState({})
  const [update, setUpdate] = useState(false)

  useEffect(()=>{ //SETTING ALL POKEMON LIST FROM API
    axios.get(Api_Url)
      .then((response)=>{
        setAllPokemonList(response.data.results)
        setLoading(false)
      })
      .catch((error)=> {console.log(error)})

  },[])
  //_______________________________________________________
  return (
    <div>
      {loading && (<h1>.: LOADING :.</h1>)}
      {!loading &&
        (<div className="main-container">
            <LeftSide
            myPokemonList={myPokemonList}
            setMyPokemonList={setMyPokemonList}
            Json_Url={Json_Url}
            setUpdate={setUpdate}
            update={update}
            />
            <InfoPage/>
            <RightSide
            allPokemonList={allPokemonList}
            Json_Url={Json_Url}
            update={update}
            setUpdate={setUpdate}
            />
        </div>)}
    </div>
  )
}

export default HomePage
