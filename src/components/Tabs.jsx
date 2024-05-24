export default function Tabs({ children, buttons, ButtonsContainer }) {
    // const ButtonContainer = buttonsContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}
