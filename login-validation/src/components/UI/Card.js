import classes from "./Card.module.css";

export default function Card(propsFromAddUser) {
    return (
        <div
            className={`${classes.card || ""} ${
                propsFromAddUser.cssClass || ""
            }`}
        >
            {propsFromAddUser.children}
        </div>
    );
}
