import React from 'react'
import Card from "../components/Card";

const Board = ({ cards, handleChoice, cardsToReset, disable, boardSize }) => {
  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
    gridGap: '5px',
    backgroundColor: 'white',
    width: boardSize  ===  4 ? '400px' : '600px',
    height: boardSize ===  4 ? '400px' : '600px',
    margin: '0 auto',
    padding: '5px',
  };
  return (
    <div className="cards-container" style={boardStyle}>
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          image={card.imageSrc}
          number={index}
          handleChoice={handleChoice}
          cardsToReset={cardsToReset}
          disable={disable}
        />
      ))}
    </div>
  );
};

export default Board;