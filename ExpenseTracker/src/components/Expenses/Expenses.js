import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("0000");

    function expensesFilterHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    let filteredExpenses = props.items;
    if (filteredYear !== "0000") {
        filteredExpenses = props.items.filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
        );
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                expensesFilterHandler={expensesFilterHandler}
            />
            <ExpensesChart items={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
