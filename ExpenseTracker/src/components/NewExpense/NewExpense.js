import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    // When this function is called from inside the ExpenseForm component, that is
    // lifting the state up.

    // In JavaScript, when you pass a function to a child component,
    // you’re actually passing a reference to the function, not the function itself.
    // This is because JavaScript handles functions as objects,
    // and when you pass objects (like functions) around,
    // you’re passing by reference, not by value.

    // And hence the data from the ExpenseForm component is recieved here inside this
    // component and that is what we call lifting the state up or say passing data from
    // child to parent.

    // It's not always that root app component to which you wanna lift your state up.
    // Instead, the goal is to lift it up just as high as necessary in your Component Tree
    // until you have a component which has both access to the components
    // that generate data as well as the components that needs data, that might be the
    // app component, but that could also be another component.

    function saveExpenseDataHandler(newExpense) {
        const newID = props.oldExpenses.slice(-1)[0].id + 1;
        props.funcAddExpense({ id: newID, ...newExpense });
    }

    return (
        <div className="new-expense">
            <ExpenseForm funcSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}
