import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const expensesEachMonth = [
        { label: "January", value: 0 },
        { label: "February", value: 0 },
        { label: "March", value: 0 },
        { label: "April", value: 0 },
        { label: "May", value: 0 },
        { label: "June", value: 0 },
        { label: "July", value: 0 },
        { label: "August", value: 0 },
        { label: "September", value: 0 },
        { label: "October", value: 0 },
        { label: "November", value: 0 },
        { label: "December", value: 0 },
    ];
    props.items.forEach((expense) => {
        const expenseAmount = expensesEachMonth[expense.date.getMonth()].value;
        if (expenseAmount === 0) {
            expensesEachMonth[expense.date.getMonth()].value = expense.amount;
        } else {
            expensesEachMonth[expense.date.getMonth()].value =
                expenseAmount + expense.amount;
        }
    });
    console.log(expensesEachMonth);
    return <Chart dataPoints={expensesEachMonth} />;
};

export default ExpensesChart;
