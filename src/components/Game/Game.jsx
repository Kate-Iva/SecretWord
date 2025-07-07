import styles from "./Game.module.css"
import { useState } from "react";

const Game = ({ 
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    guessedLetters, 
    wrongLetters, 
    guesses, 
    score }) => {

    const [ letter, setLetter ] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);
    }

    return (
    <div className={styles.game} >
    <p className={styles.points}>
     <span>Pontuação: {score} </span>
    </p>
    <h1>Advinhe a palavra:</h1>
    <h3 className={styles.tip}>
        Dica soobre a palavra: <span>{pickedCategory}</span>
    </h3>
    <p>Você ainda tem {guesses} tentativas</p>
    <div className={styles.wordContainer}>
        {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? (
                <span key={i} className={styles.letter}>{letter}</span>
            ) : (
                <span key={i} className={styles.blankSquare}></span>
            )
        ))}

    </div>
    <div className={styles.letterContainer}>
         <p>Tente advinhar uma letra da palavra:</p>
         <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}  />
            <button>Jogar</button>
         </form>
    </div>

    <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, i) => (
            <span key={i}> {letter} </span>
        ))}
    </div>
{/** 
    <button onClick={verifyLetter}>Finalisar o jogo</button>*/}
    </div>
    
);
};

export default Game;