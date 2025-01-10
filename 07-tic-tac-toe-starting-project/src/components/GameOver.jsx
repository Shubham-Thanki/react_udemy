export default function GameOver({ winner, resetHandler }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{winner ? `${winner} won!` : `Match ended in a draw`}</p>
            <button onClick={resetHandler}>Rematch!</button>
        </div>
    );
}
