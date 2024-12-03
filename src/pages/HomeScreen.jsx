import React from 'react'
import { useNavigate  } from 'react-router-dom'
import '../styles/homescreen.css'

const HomeScreen = () => {
    const navigate = useNavigate();
  
    const handlePlayClick = () => {
      navigate('/play');
    };
  
    return (
      <div className="home-screen">
        <h1 className="title">¡Bienvenido al Memotest!</h1>
        <button className="play-button" onClick={handlePlayClick}>
          Arranquemos!
        </button>
      </div>
    )
  }
  
  export default HomeScreen;