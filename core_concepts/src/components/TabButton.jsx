export default function TabButton({ isSelected, children, ...props }) {
    return (
        <li>
            <button className={isSelected ? "active" : null} {...props}>
                {children}
            </button>
        </li>
    );
}
