import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    function expensesFilterHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    expensesFilterHandler={expensesFilterHandler}
                />
                <ExpenseItem
                    key={props.items[0].id}
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    key={props.items[1].id}
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    key={props.items[2].id}
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    key={props.items[3].id}
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </>
    );
}

export default Expenses;
