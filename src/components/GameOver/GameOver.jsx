import styles from "./GameOver.module.css"

const GameOver = ( {retry, score} ) => {
    return (
    <div className={styles.game} >
        <h1>Fin do Jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
    <button onClick={retry}>Resetar jogo</button>
    
    
    </div>


);
};

export default GameOver;