// We could've also given a default value. Say ButtonsContainer = "menu"
// (In case we see the `menu` being used repeatedly)
export default function Tabs({ buttons, ButtonsContainer, children }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
