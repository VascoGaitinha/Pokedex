import { useNavigate } from 'react-router-dom';
import React from 'react'

function LandingScreen(props) {
  const navigate = useNavigate();
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      navigate('/pokedex');
    }
  };
  const {setUsername} = props;
  const chooseName = (name) =>{
    setUsername(name)
  }
  return (
    <div className='login'>
      <div>
        <h1>ENTER YOUR NAME</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => chooseName(e.target.value)}
          onKeyDown={handleEnterKey}
        />
      </div>
    </div>
  )
}

export default LandingScreen