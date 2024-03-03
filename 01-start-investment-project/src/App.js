import Header from "./components/Header/Header";
import InvestmentForm from "./components/UserInput/InvestmentForm";
import InvestmentResult from "./components/ResultsTable/InvestmentResult";

import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState(null); // per-year results

    const calculateHandler = (userInput) => {
        setUserInput(userInput);
    };

    const yearlyData = [];
    if (userInput) {
        let initialSavings = +userInput["initial-savings"];
        const yearlyContribution = +userInput["yearly-contribution"];
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput.duration;
        let totalInterest = 0;

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = initialSavings * expectedReturn;
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
    }
    return (
        <div>
            <Header />
            <InvestmentForm onCalculate={calculateHandler} />
            <InvestmentResult yearlyResults={yearlyData} />
        </div>
    );
}

export default App;
