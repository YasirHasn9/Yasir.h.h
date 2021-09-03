import { Wrapper, HeroSection } from "./style.layout";
import { Nav } from "../nav/Nav";
import { Footer } from "../footer/Footer";
import { DarkModeBtn } from "../../common/buttons/darkmodeBtn";
import { CgDarkMode } from "react-icons/cg";

import { useState } from "react";
export const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (
        <>
            <Wrapper>
                <header>
                    <Nav />

                    <div className="introduction">
                        <h1 className="introduction-heading">Learner</h1>
                        <h1 className="introduction-heading">Problem Solver</h1>
                    </div>
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Wrapper>
        </>
    );
};
