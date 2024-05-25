import classes from "./Button.module.css";

export default function Button(propsFromAddUser) {
    return (
        <button
            className={classes.button}
            type={propsFromAddUser.type || "button"}
            onClick={propsFromAddUser.onClickHandler}
        >
            {propsFromAddUser.children}
        </button>
    );
}
