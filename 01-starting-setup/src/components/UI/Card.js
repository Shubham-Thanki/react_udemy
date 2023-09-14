import "./Card.css";

export default function Card(props) {
    const classList = "card " + props.className;
    return <div className={classList}>{props.children}</div>;
}
