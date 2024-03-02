import "./InvestmentForm.css";

export default function InvestmentForm(propsFromNewInvestment) {
    function submitHandler(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const investObj = {
            "initial-savings": formData.get("initial-savings"),
            "yearly-contribution": formData.get("yearly-contribution"),
            "expected-return": formData.get("expected-return"),
            duration: formData.get("duration"),
        };
        propsFromNewInvestment.calculateHandler(investObj);
    }

    function resetValues() {
        propsFromNewInvestment.setYearlyResults([]);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="initial-savings">Current Savings (₹)</label>
                    <input
                        type="number"
                        id="initial-savings"
                        name="initial-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings (₹)
                    </label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        name="yearly-contribution"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        name="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input type="number" id="duration" name="duration" />
                </p>
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={resetValues}
                >
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
}
