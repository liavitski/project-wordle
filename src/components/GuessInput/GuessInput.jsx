import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function makeGuess(event) {
    event.preventDefault();

    console.log({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={makeGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) =>
          setGuess(event.target.value.toUpperCase())
        }
        title="Must be exactly 5 letters"
        pattern="[A-Za-z]{5}"
        required
      />
    </form>
  );
}

export default GuessInput;
