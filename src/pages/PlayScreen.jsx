import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import looksdiego from '../assets/images/looksDiego'
import VictoryScreen from '../components/VictoryScreen'
import Board from '../components/Board'

const PlayScreen = () => {
  const { state } = useLocation();
  const boardSize = state?.size || 4;
  const uniqueCards = (boardSize * boardSize) / 2;

  const [looks, setLooks] = useState([]);
  const [selectedCard, setSelectedCard] = useState({})
  const [cardsToReset, setCardsToReset] = useState([])
  const [points, setPoints] = useState(0);
  const [disableCards, setDisableCards] = useState(false)
  const [isWinner, setIsWinner] = useState(false)

  const randomizeArray = (anArray) => {
    for (let i = anArray.length - 1; i > 0; i--) {
      const j = Math.floor((i + 1) * Math.random());
      [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
    }
    return anArray;
  }

  useEffect(() => {
    const looksToRandomize = looksdiego.slice(0, uniqueCards);
    setLooks(randomizeArray(looksToRandomize.concat(looksToRandomize)));
  }, [uniqueCards]);

  const checkIfIsWinner = () => {
    if (points === uniqueCards - 1) setIsWinner(true);
  };

  const resetCards = () => {
    setSelectedCard({})
    setDisableCards(false)
  }

  const checkIfMatch = (name, number) => {
    setDisableCards(true);
    if (selectedCard.name === name) {
      setPoints(points + 1)
      checkIfIsWinner()
      resetCards()
    } else {
      setTimeout(() => {
        setCardsToReset([selectedCard.number, number]);
        resetCards()
      }, 1000)
    }
  }

  const handleChoice = (name, number) => {
    selectedCard.name ? checkIfMatch(name, number) : setSelectedCard({ name, number });
  }

  const resetGame = () => {
    resetCards()
    setPoints(0)
    setIsWinner(false)
    setCardsToReset(Array(uniqueCards * 2).fill().map((_, idx) => idx));
  }

  return (
    <div className="gamescreen-container">
      {isWinner ? (
        <VictoryScreen resetGame={resetGame} />
      ) : (
        <>
          <p className="gamescreen-title">Tablero en juego</p>
          <Board
            cards={looks}
            handleChoice={handleChoice}
            cardsToReset={cardsToReset}
            disable={disableCards}
            amountOfUniqueCards={uniqueCards}
          />
          <div className="game-footer">
            <p className="game-footer-points">Puntos sumados: {points}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayScreen
