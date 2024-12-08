import React from 'react'
import { useNavigate  } from 'react-router-dom'
import maradonaSignature from '../assets/backgrounds/background-maradona-signature.png';
import '../styles/homescreen.css'


const HomeScreen = () => {
  const navigate = useNavigate();

  const handlePlayClick = (size) => {
    navigate('/play', { state: { size } });
  };

  return (
    <div className="home-screen">
      <h1 className="title">Bienvenido al Memotest <br /> "Mano de Dios"⚽🏆</h1>
      <h2 className='sub-title'>Divertite encontrando a los Diegotes pares... <br />A mostrar la magia de tu mente, barrilete cósmico!</h2>
      <h3 className='size-text'>Seleccioná la dificultad que querés jugar:</h3>
      <div className="board-size-buttons">
        <button className="play-button" onClick={() => handlePlayClick(4)}>Cebollita</button>
        <button className="play-button" onClick={() => handlePlayClick(5)}>Campeón Sub-20</button>
        <button className="play-button" onClick={() => handlePlayClick(6)}>Campeón del mundo</button>
      </div>
      <div>
        <img className='img-signature' src={maradonaSignature}/>
      </div>    
    </div>
  );
};

export default HomeScreen;