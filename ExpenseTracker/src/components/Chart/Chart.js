import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // With a large array, Math.max will be called with a large number of arguments,
    // which can cause stack overflow. Hence, it is better to use reduce.

    // SYNTAX
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // refer MDN for details on reduce() method.
    // we use `reduce` instead of any other method due to performance reasons.
    let maxValue = props.dataPoints.reduce((accumulator, currentExpense) => {
        if (currentExpense.value > accumulator) {
            return currentExpense.value;
        }
        return accumulator;
    }, 0);
    maxValue = 10 ** (String(Math.round(maxValue)).length - 1);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
