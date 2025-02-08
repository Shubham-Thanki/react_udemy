export default function ResultRow({ result, formatter }) {
    return (
        <tr>
            <td>{result.year}</td>
            <td>{formatter.format(result.investedCapital)}</td>
            <td>{formatter.format(result.yearlyInterest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.totalAmount)}</td>
        </tr>
    );
}
