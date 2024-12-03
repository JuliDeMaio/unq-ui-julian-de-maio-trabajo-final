import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VictoryScreen = ({ resetGame }) => {
  const navigate = useNavigate();

  return (
    <div className="victory-screen">
      <h1 className="victory-title">¡Felicidades, ganaste! 🎉</h1>
      <p className="victory-message">Has completado el desafío.</p>
      <div className="victory-buttons">
        <button className="victory-btn play-again" onClick={resetGame}>
          Jugar de nuevo
        </button>
        <button className="victory-btn go-home" onClick={() => navigate('/')}>
          Ir al inicio
        </button>
      </div>
    </div>
  );
};

export default VictoryScreen;