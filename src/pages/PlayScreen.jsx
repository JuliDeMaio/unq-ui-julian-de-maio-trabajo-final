import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import looksdiego from '../assets/images/looksDiego'
import VictoryPanel from '../components/VictoryPanel'
import Board from '../components/Board'

const PlayScreen = () => {
  const { state } = useLocation()
  const boardSize = state?.size || 4
  const uniqueCards = (boardSize * boardSize) / 2

  const [looks, setLooks] = useState([]);
  const [selectedCard, setSelectedCard] = useState({})
  const [cardsToReset, setCardsToReset] = useState([])
  const [points, setPoints] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [highestScore, setHighestScore] = useState(0)
  const [disableCards, setDisableCards] = useState(false)
  const [matchedPairs, setMatchedPairs] = useState(0)
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
    const storedHighestScore = localStorage.getItem('highestScore');
    if (storedHighestScore) setHighestScore(parseInt(storedHighestScore));
  }, [uniqueCards]);

  const checkIfIsWinner = () => {
    if (matchedPairs === uniqueCards-1) {
      setIsWinner(true);
    }
  };

  const resetCards = () => {
    setSelectedCard({})
    setDisableCards(false)
  }

  const checkIfMatch = (name, number) => {
    setDisableCards(true);
    setAttempts((prev) => prev + 1)
    if (selectedCard.name === name) {
      setPoints((prevPoints) => prevPoints + 20);
      setMatchedPairs((prev) => prev + 1);
      checkIfIsWinner()
      resetCards()
    } else {
      setTimeout(() => {
        setPoints((prevPoints) => prevPoints - 4);
        setCardsToReset([selectedCard.number, number]);
        resetCards()
      }, 1000)
    }
  }

  const handleChoice = (name, number) => {
    selectedCard.name ? checkIfMatch(name, number) : setSelectedCard({ name, number });
  }

  const resetGame = () => {
    if (points > highestScore) {
      setHighestScore(points);
      localStorage.setItem('highestScore', points)
    }
    resetCards()
    setMatchedPairs(0)
    setPoints(0)
    setAttempts(0)
    setIsWinner(false)
    setCardsToReset(Array(uniqueCards * 2).fill().map((_, idx) => idx));
  }

  return (
    <div className="gamescreen-container">
      {isWinner ? (
        <VictoryPanel resetGame={resetGame} points={points} attempts={attempts} highestScore={highestScore} />
      ) : (
        <>
          <div className="game-footer">
            <p className="game-footer-points">Puntos: {points} 🟢</p>
            <p className="game-footer-points">Intentos: {attempts} 🔴</p>
            <p className="game-footer-points">Mejor puntuación: {highestScore} 🏆</p>
          </div>
          <Board
            cards={looks}
            handleChoice={handleChoice}
            cardsToReset={cardsToReset}
            disable={disableCards}
            amountOfUniqueCards={uniqueCards}
            boardSize={boardSize}
          />
        </>
      )}
    </div>
  );
};

export default PlayScreen
