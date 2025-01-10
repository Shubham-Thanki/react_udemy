export default function GameBoard({ handleSelectSquare, board }) {

    return (
        <ol id="game-board">
            {board.map((row, rowIdx) => {
                return (
                    <li key={rowIdx}>
                        <ol>
                            {row.map((playerSymbol, colIdx) => {
                                return (
                                    <li key={colIdx}>
                                        <button
                                            onClick={() =>
                                                handleSelectSquare(
                                                    rowIdx,
                                                    colIdx
                                                )
                                            }
                                            disabled={playerSymbol !== null}
                                        >
                                            {playerSymbol}
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
}
