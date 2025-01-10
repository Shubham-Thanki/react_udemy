export default function Log({ gameTurns }) {
    return (
        <ol id="log">
            {gameTurns.map((turn) => {
                const rowColIndex = `${turn.squarePosition.rowIndex}${turn.squarePosition.colIndex}`;
                return (
                    <li key={rowColIndex}>
                        {`${turn.player} selected ${rowColIndex}`}
                    </li>
                );
            })}
        </ol>
    );
}
