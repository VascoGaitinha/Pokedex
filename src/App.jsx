
import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LandingScreen from './components/LandingScreen'

function App() {
  const [username, setUsername] = useState('');

  return (
    <Routes>
      <Route path="/" element={<LandingScreen
      setUsername={setUsername}
      username={username}/>} />
      <Route path="/pokedex" element={<HomePage
      setUsername={setUsername}
      username={username}/>}/>
    </Routes>
    )
}

export default App
