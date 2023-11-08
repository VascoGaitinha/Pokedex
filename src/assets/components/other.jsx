import axios from "axios"
import { useState, useEffect } from "react"
import Image from "./Image"

let Other = () => {
    const [allCards, setAllCards] = useState({})
    const [loading, setLoading] = useState(true)
    const Pokedex_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"

    useEffect (()=>{
        axios.get(Pokedex_URL)
        .then((response)=>{
            setAllCards(response.data.results);
            setLoading(false);
        })
    },[])

    return(
        
        <div className="pokemon-list">
        {loading && <h2>Loading</h2>}
        {!loading && 
        
            allCards.map((card, index) =>{
            return(
                <div key={index}>
                    <Image url={card.url} image="big"/>
                </div>
            )
        })
        }
        </div>
    )
}
export default Other