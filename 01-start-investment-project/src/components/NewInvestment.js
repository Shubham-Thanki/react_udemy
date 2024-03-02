import { useState } from "react";

import "./NewInvestment.css";
import InvestmentForm from "./InvestmentForm";
import InvestmentResult from "./InvestmentResult";

export default function NewInvestment() {
    const [yearlyResults, setYearlyResults] = useState([]); // per-year results

    const calculateHandler = (userInput) => {
        const yearlyData = [];
        let initialSavings = +userInput["initial-savings"];
        const yearlyContribution = +userInput["yearly-contribution"];
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput.duration;
        let totalInterest = 0;

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = Math.round(initialSavings * expectedReturn);
            totalInterest += yearlyInterest;
            // the initialSavings variable is updated on every iteration to get the total savings
            // for that year.
            initialSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                investedCapital: initialSavings - yearlyInterest,
                yearlyInterest: yearlyInterest,
                totalInterest: totalInterest,
                savingsEndOfYear: initialSavings,
            });
        }
        // console.log(yearlyData);
        setYearlyResults(yearlyData);
    };

    return (
        <>
            <InvestmentForm
                calculateHandler={calculateHandler}
                setYearlyResults={setYearlyResults}
            />
            <InvestmentResult yearlyResults={yearlyResults} />
        </>
    );
}
