import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentDice, setCurrentDice] = useState(dice1);

  const rollDice = () => {
    setCurrentDice(diceEmpty); // Mostrar la imagen vacía

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentDice(diceImages[randomIndex]); // Cambiar a una imagen aleatoria
    }, 1000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center border rounded p-3">
    <img
      src={currentDice}
      alt="Dice"
      onClick={rollDice}
      style={{ width: '100px', cursor: 'pointer' }}
    />
    </div>
  );
};

export default Dice;
