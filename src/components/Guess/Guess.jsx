import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const letters = guess ? guess.value : '';
  
  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span className="cell" key={index}>
            {letters[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
