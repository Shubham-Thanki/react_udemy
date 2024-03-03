import classes from "./InvestmentResult.module.css"

export default function InvestmentResult(propsFromNewInvestment) {
    const yearlyResults = propsFromNewInvestment.yearlyResults;
    const formatter = new Intl.NumberFormat("en-IN", {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    if (yearlyResults.length > 0) {
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
                    {yearlyResults.map((resultPerYear) => {
                        return (
                            <tr key={resultPerYear.year}>
                                <td>{resultPerYear.year}</td>
                                <td>{formatter.format(resultPerYear.investedCapital)}</td>
                                <td>{formatter.format(resultPerYear.yearlyInterest)}</td>
                                <td>{formatter.format(resultPerYear.totalInterest)}</td>
                                <td>{formatter.format(resultPerYear.savingsEndOfYear)}</td>
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
