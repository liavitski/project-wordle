import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
// let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

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

  function handleRestart() {
    setGuesses([]);
    setStatus('running');
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <button className="restartBtn" onClick={handleRestart}>
        Restart
      </button>
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
