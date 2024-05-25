import Card from "./UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(propsFromApp) {
    const users = propsFromApp.users;
    if (users.length) {
        return (
            <Card cssClass={classes.users}>
                <ul>
                    {users.map((user) => {
                        return (
                            <li key={user.id}>
                                {user.userName}, {user.age}
                            </li>
                        );
                    })}
                </ul>
            </Card>
        );
    }
}
