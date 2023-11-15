import React from 'react'
import data from "../assets/details.json"

function InfoPage(props) {

  const types= data[0]
  const colors= data[1]
  const icons= data[2]

  const {pokemonInfo,infoLoaded} = props;

  return (
    <div className='mid-container' style={{ visibility: infoLoaded ? "visible" : "hidden" }}>
      {!infoLoaded ? (<p>Loading</p>) :      
      <div>
        <h1>Details</h1>
        <div className='pokemon-details-image-div' style={{ backgroundColor: colors[types.indexOf(pokemonInfo.types[0].type.name)] }}>
          <img 
          className='pokemon-details-image' src={pokemonInfo.sprites.other.dream_world.front_default} alt="pkm img"/>
        </div>
        <h2>{pokemonInfo.name.toUpperCase()}</h2>

        {pokemonInfo.types.length === 1? 
        (<div className='pokemon-types-icons'>
          <img src={icons[types.indexOf((pokemonInfo.types[0].type.name))]}/>
        </div>
        ):(
          <div className='pokemon-types-icons'>
            <img src={icons[types.indexOf((pokemonInfo.types[0].type.name))]}/>
            <img src={icons[types.indexOf((pokemonInfo.types[1].type.name))]}/>
          </div>
        )}        


        <p>NR:{pokemonInfo.id}</p>
        <p>WEIGHT:{pokemonInfo.weight} Lbs</p> 
      </div>
}

    </div>
  )
}

export default InfoPage