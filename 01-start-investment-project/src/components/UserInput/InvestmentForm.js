import classes from "./InvestmentForm.module.css";

export default function InvestmentForm({ onCalculate }) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const investObj = {
            "monthly-contribution": +formData.get("monthly-contribution"),
            "expected-return": +formData.get("expected-return"),
            duration: +formData.get("duration"),
        };
        onCalculate(investObj);
    };

    const handleReset = () => {
        onCalculate({});
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes["input-group"]}>
                {[
                    {
                        id: "monthly-contribution",
                        label: "Monthly Contribution (₹)",
                        type: "number",
                    },
                    {
                        id: "expected-return",
                        label: "Expected Interest (%, per year)",
                        type: "number",
                    },
                    {
                        id: "duration",
                        label: "Investment Duration (years)",
                        type: "number",
                    },
                ].map(({ id, label, type }) => (
                    <p key={id}>
                        <label htmlFor={id}>{label}</label>
                        <input type={type} id={id} name={id} required />
                    </p>
                ))}
            </div>
            <p className={classes.actions}>
                <button
                    type="reset"
                    className={classes.buttonAlt}
                    onClick={handleReset}
                >
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}
