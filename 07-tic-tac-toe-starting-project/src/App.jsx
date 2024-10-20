import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";

export default function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <PlayerInfo
                        initialName="Playr-1"
                        symbolClass="fa-solid fa-o"
                    />
                    <PlayerInfo
                        initialName="Playr-2"
                        symbolClass="fa-solid fa-x"
                    />
                </ol>
                <GameBoard />
            </div>
        </main>
    );
}
