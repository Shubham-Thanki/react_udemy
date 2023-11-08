import React from "react";
// under the hood, the page is rendered with React.createElement() and hence this
// import can be justified. But not required nowadays, since many browsers
// now support react by default.
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    function submitHandler(event) {
        event.preventDefault();

        //HTML form element --> event.currentTarget
        const formData = new FormData(event.currentTarget);

        // for more info --> https://github.com/john-smilga/youtube-react-formdata-api/blob/main/README.md
        // const newExpenseObj = Object.fromEntries(formData);
        const newExpenseObj = {
            title: formData.get("title"),
            amount: parseInt(formData.get("amount")),
            date: new Date(formData.get("date")),
        };
        props.funcSaveExpenseData(newExpenseObj);

        // to reset all form values.
        event.currentTarget.reset();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <input
                        type="text"
                        placeholder="Title here..."
                        name="title"
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="Amount here..."
                        name="amount"
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        placeholder="Date here..."
                        name="date"
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
}
