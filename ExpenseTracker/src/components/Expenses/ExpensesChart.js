import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const expensesEachMonth = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    // we receive all the expenses as `items`, we go through them
    // and add the amounts to the `expensesEachMonth` depending on the month.
    props.items.forEach((expense) => {
        const expenseMonth = expense.date.getMonth();
        expensesEachMonth[expenseMonth].value += expense.amount;
    });
    return <Chart dataPoints={expensesEachMonth} />;
};

export default ExpensesChart;
