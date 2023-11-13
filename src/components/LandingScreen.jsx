import { Link } from 'react-router-dom';
import React from 'react'

function LandingScreen(props) {
  const {setUsername} = props;
  const chooseName = (name) =>{
    setUsername(name)
  }
  return (
    <div>
    <div><h1>Enter your name</h1></div>
    <div>
    <input type="text" placeholder="search..."
            onChange={(e) => chooseName(e.target.value)}
            />
    </div>
    <Link to="/pokedex">
    <button></button>
    </Link>
    </div>
  )
}

export default LandingScreen