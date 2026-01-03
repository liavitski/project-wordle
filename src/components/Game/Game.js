import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  console.log(status);

  function handleSubmitGuess(tentativeGuess) {
    const newGuess = {
      id: crypto.randomUUID(),
      value: tentativeGuess,
    };

    const newGuesses = [...guesses, newGuess];

    if (
      newGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      tentativeGuess !== answer
    ) {
      setStatus('lost');
    } else if (tentativeGuess === answer) {
      setStatus('won');
    }

    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        status={status}
      />
      {status === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {status === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
