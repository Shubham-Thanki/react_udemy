import { useState } from "react";

export default function PlayerInfo({ initialName, symbolClass }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleChange() {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = (
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
            />
        );
        btnCaption = "Save";
    }

    return (
        <li>
            <i className={`${symbolClass} player-symbol`}></i>
            <span className="player">{editablePlayerName}</span>
            <button onClick={() => handleChange()}>{btnCaption}</button>
        </li>
    );
}
