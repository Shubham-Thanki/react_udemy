import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    function optionChangeHandler(ev) {
        props.expensesFilterHandler(ev.target.value);
    }

    /* ExpensesFilter is a controlled component. A controlled component
    receives its current value and an update callback via props, and the parent
    component manages the state of the component.

    When the user interacts with the component, the parent component updates the
    state, which in turn updates the component's value. */

    return (
        <div className="expenses-filter" id="shut">
            <div className="expenses-filter__control">
                <label htmlFor="years">Filter by year</label>
                <select
                    value={props.selected}
                    name="years"
                    id="years"
                    onChange={optionChangeHandler}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
