import { useState } from "react";

import { WINNING_COMBINATIONS } from "./winning-combinations";

import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import PlayerInfo from "./components/PlayerInfo";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function checkWin(gameBoard) {
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination; // Destructure to access each position
        const firstElement = gameBoard[a.row][a.col];

        if (
            firstElement &&
            firstElement === gameBoard[b.row][b.col] &&
            firstElement === gameBoard[c.row][c.col]
        ) {
            return firstElement;
        }
    }
    return false;
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const players = [
        { initialName: "Playr-1", symbolClass: "fa-solid fa-o", symbol: "O" },
        { initialName: "Playr-2", symbolClass: "fa-solid fa-x", symbol: "X" },
    ];
    // Derive game board directly from game turns
    const gameBoard = initialGameBoard.map((row, rowIndex) =>
        row.map(
            (_, colIndex) =>
                gameTurns.find(
                    (turn) =>
                        turn.squarePosition.rowIndex === rowIndex &&
                        turn.squarePosition.colIndex === colIndex
                )?.player || null
        )
    );

    // Determine the active player based on the number of turns
    const activePlayer = gameTurns.length % 2 === 0 ? "X" : "O";

    // Check if there’s a winner
    const winner = checkWin(gameBoard);
    let draw;
    if (!winner && gameTurns.length === 9) {
        draw = true;
    }

    // Handle square selection
    function handleSelectSquare(rowIndex, colIndex) {
        if (!gameBoard[rowIndex][colIndex] && !winner) {
            setGameTurns((prevTurns) => [
                {
                    squarePosition: { rowIndex, colIndex },
                    player: activePlayer,
                },
                ...prevTurns,
            ]);
        }
    }

    function resetGameBoard() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {players.map((player) => {
                        return (
                            <PlayerInfo
                                key={player.symbol}
                                initialName={player.initialName}
                                symbolClass={player.symbolClass}
                                isPlayerActive={activePlayer === player.symbol}
                            />
                        );
                    })}
                </ol>
                <GameBoard
                    handleSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
                {(winner || draw) && (
                    <GameOver winner={winner} resetHandler={resetGameBoard} />
                )}
            </div>
            <Log gameTurns={gameTurns} />
        </main>
    );
}
