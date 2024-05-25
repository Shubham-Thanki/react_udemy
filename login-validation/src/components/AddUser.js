import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser(propsFromApp) {
    function submitHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let userObj = {};
        for (const formEntries of formData.entries()) {
            userObj[formEntries[0]] = formEntries[1];
        }
        if (areNonEmptyValues(userObj)) {
            isValidAge(+userObj.age)
                ? propsFromApp.onAddUserClick(userObj)
                : propsFromApp.onErrorModal({
                      title: "Invalid input",
                      message: "Please enter valid age (>0).",
                  });
        } else {
            propsFromApp.onErrorModal({
                title: "No input found",
                message:
                    "Non-empty values are not accepted. Please enter some data.",
            });
        }
    }

    function isValidAge(age) {
        return age > 0;
    }

    function areNonEmptyValues(valueObj) {
        return Object.values(valueObj).every((value) =>
            typeof value === "string" ? value.trim() : value
        );
    }

    return (
        <Card cssClass={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="fname">Name:</label>
                <input
                    type="text"
                    id="fname"
                    name="userName"
                    defaultValue="Shubham"
                />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" defaultValue={22} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}
