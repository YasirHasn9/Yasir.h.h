import { Button } from "./style.darkmodeBtn";

export const DarkModeBtn = (props) => {
    return (
        <Button darkMode={props.darkMode} onClick={props.toggleMode}>
            {props.children}
        </Button>
    );
};
