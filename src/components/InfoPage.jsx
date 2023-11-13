import React from 'react'
import "../Shadows.css"

function InfoPage(props) {
  const {pokemonInfo,infoLoaded} = props;
  console.log()
  return (
    <div id="details-container" className='mid-container' style={{ visibility: infoLoaded ? "visible" : "hidden" }}>
      {!infoLoaded && <p>Loading</p>}
      {infoLoaded &&
      <div>
      <h1>Details</h1>
      <div className='pokemon-details-image-div'>
      <img className='pokemon-details-image' src={pokemonInfo.sprites.other.dream_world.front_default} alt="pkm img"/>
      </div>
      <h2>Name: {pokemonInfo.name.toUpperCase()}</h2>
      <p>Type: {pokemonInfo.types[0].type.name.toUpperCase()}</p>
      <p>Nr:{pokemonInfo.id}</p>
      <p>Weight:{pokemonInfo.weight} Lbs</p> 
      </div>}

    </div>
  )
}

export default InfoPage