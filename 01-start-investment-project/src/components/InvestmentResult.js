import "./InvestmentResult.css";

export default function InvestmentResult(propsFromNewInvestment) {
    const yearlyResults = propsFromNewInvestment.yearlyResults;
    if (yearlyResults.length > 0) {
        return (
            <table className="result">
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
                    {yearlyResults.map((resultPerYear) => {
                        return (
                            <tr key={resultPerYear.year}>
                                <td>{resultPerYear.year}</td>
                                <td>₹ {resultPerYear.investedCapital}</td>
                                <td>₹ {resultPerYear.yearlyInterest}</td>
                                <td>₹ {resultPerYear.totalInterest}</td>
                                <td>₹ {resultPerYear.savingsEndOfYear}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    } else {
        return <h1>No Investments to show.</h1>;
    }
}
