import { useState } from "react";

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    function handleSelectSquare(rowIdx, colIdx) {
        debugger;
        const updatedGameBoard = [
            ...gameBoard.map((innerArray) => [...innerArray]),
        ];
        updatedGameBoard[rowIdx][colIdx] = "X";
        setGameBoard(updatedGameBoard);
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIdx) => {
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
