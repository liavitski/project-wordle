import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
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
