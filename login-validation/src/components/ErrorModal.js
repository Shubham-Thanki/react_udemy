import classes from "./ErrorModal.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

export default function ErrorModal(propsFromApp) {
    return (
        <>
            <div
                className={classes.backdrop}
                onClick={propsFromApp.onClickOkay}
            ></div>
            <Card cssClass={classes.modal}>
                <header className={classes.header}>
                    <h2>{propsFromApp.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{propsFromApp.content}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClickHandler={propsFromApp.onClickOkay}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </>
    );
}
