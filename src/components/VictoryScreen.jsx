import { useNavigate } from "react-router-dom";
import maradonaWorldCup from '../assets/backgrounds/background-maradona-world-cup.png';

const VictoryScreen = ({ resetGame }) => {
  const navigate = useNavigate();

  return (
    <div className="victory-screen">
      <h1 className="victory-title">¡Felicidades, genio del MemoTest Mundial! </h1>
      <h2 className="victory-message">Completaste el desafío... 🏆</h2>
      <img className="victory-img" src={maradonaWorldCup} />
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