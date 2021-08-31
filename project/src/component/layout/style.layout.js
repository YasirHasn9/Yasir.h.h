import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => (props.darkMode ? "black" : "#fff")};
    transition: all 0.3s;
    .darkmodeBth {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
        transform: ${(props) =>
            props.darkMode ? "rotate(0deg)" : "rotate(-181deg)"};
    }
    color: ${(props) => (props.darkMode ? "#fff" : "#000")};
`;
