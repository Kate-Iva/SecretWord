import styles from "./GameOver.module.css"

const GameOver = ( {retry} ) => {
    return (
    <div className={styles.game} >Game over
    <button onClick={retry}>Resetar jogo</button>
    
    
    </div>


);
};

export default GameOver;