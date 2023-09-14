import "./Expenses.css";
import Card from "../UI/Card";
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
    return <Card className="expenses">{expenseItemView}</Card>;
}

export default Expenses;
