import { useRef, useState } from "react";

export default function Player() {
    const playerName = useRef(null);
    const [name, setName] = useState(null);

    function handleSetName() {
        setName(playerName.current.value);
        playerName.current.value = "";
    }

    return (
        <section id="player">
            <h2>Welcome {name ?? "unknown entity"}</h2>
            <p>
                <input type="text" ref={playerName} />
                <button onClick={handleSetName}>Set Name</button>
            </p>
        </section>
    );
}
