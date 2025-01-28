import { useState } from "react";

import { WINNING_COMBINATIONS } from "./winning-combinations";

import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import PlayerInfo from "./components/PlayerInfo";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYERS = [
    { initialName: "Playr-1", symbolClass: "fa-solid fa-x", symbol: "X" },
    { initialName: "Playr-2", symbolClass: "fa-solid fa-o", symbol: "O" },
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
            return PLAYERS.find((player) => player.symbol === firstElement)
                .initialName;
        }
    }
    return false;
}

function deriveGameBoard(gameTurns) {
    return INITIAL_GAME_BOARD.map((row, rowIndex) =>
        row.map(
            (_, colIndex) =>
                gameTurns.find(
                    (turn) =>
                        turn.squarePosition.rowIndex === rowIndex &&
                        turn.squarePosition.colIndex === colIndex
                )?.player || null
        )
    );
}

function updatePlayerName(symbolClass, name) {
    PLAYERS.find((player) => player.symbolClass === symbolClass).initialName =
        name;
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([]);
    // Derive game board directly from game turns
    const gameBoard = deriveGameBoard(gameTurns);

    // Determine the active player based on the number of turns
    const activePlayer = gameTurns.length % 2 === 0 ? "X" : "O";

    // Check if there’s a winner
    const winner = checkWin(gameBoard);
    const draw = !winner && gameTurns.length === 9;

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
                    {PLAYERS.map((player) => {
                        return (
                            <PlayerInfo
                                key={player.symbol}
                                initialName={player.initialName}
                                symbolClass={player.symbolClass}
                                isPlayerActive={activePlayer === player.symbol}
                                updatePlayerNameHandler={updatePlayerName}
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
