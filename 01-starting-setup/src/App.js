import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        // this is known as fragment, we can use this in-place of div to wrap
        // the JSX code which we want to retun.
        <>
            <Expenses items={expenses} />
        </>
    );

    //     The below written code is an example of how
    //     react code is rendered in the backend. This
    //     is the way React code was written in earlier times.
    //     1st param --> HTML Element.
    //     2nd param --> set of attributes.
    //     3rd param --> what to put inside, could be text. In this case,
    //                     another element.
    //     return React.createElement(
    //         "div",
    //         {},
    //         React.createElement("h2", {}, "Hello World!"),
    //         React.createElement(Expenses, { items: expenses })
    // );
}

export default App;
