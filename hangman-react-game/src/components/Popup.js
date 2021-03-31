import React, {useEffect} from 'react'
import {checkWin} from '../helpers/helpers'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessege ='';
  let finalMessegeRevealWord = '';
  let playable = true;

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
    finalMessege = 'Congratulations! You won!';
    playable = false;
  } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessege = 'Unfortunately you lost.';
    finalMessegeRevealWord = `... the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect( () => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessege !== '' ? {display: 'flex'} : {}}>
        <div className="popup">
            <h2>{finalMessege}</h2>
            <h3>{finalMessegeRevealWord}</h3>
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default Popup