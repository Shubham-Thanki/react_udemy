import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenseItemView = props.items.map((expense) => {
        return (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    });
    console.log(expenseItemView);
    return <div className="expenses">{expenseItemView}</div>;
}

export default Expenses;
