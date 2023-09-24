import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
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
