import Header from "./components/Header/Header";
import InvestmentForm from "./components/UserInput/InvestmentForm";
import InvestmentResult from "./components/ResultsTable/InvestmentResult";

import { useState } from "react";

function calculateFutureValue(
    monthlyInvestment,
    monthlyInterestRate,
    durationInMonths
) {
    const monthlyGrowthFactor = 1 + monthlyInterestRate;
    return Math.round(
        ((monthlyInvestment *
            (Math.pow(monthlyGrowthFactor, durationInMonths) - 1)) /
            monthlyInterestRate) *
            monthlyGrowthFactor
    );
}

function App() {
    const [userInput, setUserInput] = useState(null);

    const handleCalculate = (input) => {
        setUserInput(input);
    };

    const yearlyData = [];
    if (userInput) {
        const monthlyInvestment = +userInput["monthly-contribution"];
        const monthlyInterestRate = +userInput["expected-return"] / 1200;
        const durationInYears = +userInput.duration;

        let previousTotalInterest = 0;

        for (let year = 1; year <= durationInYears; year++) {
            const totalMonths = year * 12;
            const totalAmount = calculateFutureValue(
                monthlyInvestment,
                monthlyInterestRate,
                totalMonths
            );
            const totalContributions = monthlyInvestment * 12 * year;
            const totalInterest = totalAmount - totalContributions;
            const yearlyInterest = totalInterest - previousTotalInterest;

            previousTotalInterest = totalInterest;

            yearlyData.push({
                year,
                investedCapital: totalContributions,
                yearlyInterest,
                totalInterest,
                totalAmount,
            });
        }
    }

    return (
        <>
            <Header />
            <InvestmentForm onCalculate={handleCalculate} />
            <InvestmentResult yearlyResults={yearlyData} />
        </>
    );
}

export default App;
