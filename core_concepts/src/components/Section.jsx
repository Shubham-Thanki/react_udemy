export default function Section({ title, children, ...props }) {
    return (
        // Spreading the remaining props here.
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
