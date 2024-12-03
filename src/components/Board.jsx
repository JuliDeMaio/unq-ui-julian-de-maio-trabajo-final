import React from 'react'
import Card from "../components/Card";

const Board = ({ cards, handleChoice, cardsToReset, disable }) => {
  return (
    <div className="cards-container">
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