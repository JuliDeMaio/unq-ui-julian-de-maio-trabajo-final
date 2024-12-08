import { useNavigate } from "react-router-dom";
import maradonaWorldCup from '../assets/backgrounds/background-maradona-world-cup.png';

const VictoryScreen = ({ resetGame, points, attempts, highestScore }) => {
  const navigate = useNavigate();

  return (
    <div className="victory-screen">
      <h1 className="victory-title">¡Felicidades, genio del MemoTest Mundial! </h1>
      <p className="victory-message">Completaste el desafío...🏆</p>
      <img className="victory-img" src={maradonaWorldCup} />
      <p className="victory-message">Tu puntación ésta partida fue de <b>{points} puntos.</b></p>
      <p className="victory-message">La mejor puntación obtenida fue de <b>{highestScore} puntos.</b></p>
      <p className="victory-message">Superáte... 😉</p>
      <div className="victory-buttons-container">
        <button className="victory-button" onClick={resetGame}>
          Jugar de nuevo
        </button>
        <button className="victory-button" onClick={() => navigate('/')}>
          Ir al inicio
        </button>
      </div>
    </div>
  );
};

export default VictoryScreen;