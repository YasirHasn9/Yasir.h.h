import { Wrapper } from "./style.layout";
import { Header } from "../header/Header";
import { DarkModeBtn } from "../../common/buttons/darkmodeBtn";
import { CgDarkMode } from "react-icons/cg";

import { useState } from "react";
export const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (
        <Wrapper darkMode={darkMode}>
            <DarkModeBtn darkMode={darkMode} toggleMode={toggleMode}>
                <div className="darkmodeBth">
                    <CgDarkMode />
                </div>
            </DarkModeBtn>
            <Header />
            <main>{children}</main>
        </Wrapper>
    );
};
