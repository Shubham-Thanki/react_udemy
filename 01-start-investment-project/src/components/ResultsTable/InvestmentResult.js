import ResultRow from "./ResultRow";
import classes from "./InvestmentResult.module.css";

export default function InvestmentResult({ yearlyResults }) {
    const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    if (yearlyResults.length === 0) {
        return <h1>No Investments to show.</h1>;
    }

    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>At the end of Year</th>
                    <th>Invested Capital</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {yearlyResults.map((result) => (
                    <ResultRow
                        key={result.year}
                        result={result}
                        formatter={formatter}
                    />
                ))}
            </tbody>
        </table>
    );
}
