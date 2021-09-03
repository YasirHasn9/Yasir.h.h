import styled from "styled-components";
import HeroImg from "../../assets/images/apple-1838564_1920-main.jpg";

export const Wrapper = styled.div`
    width: 100%;
    header {
        position: relative;
        width: 100%;
        height: 50rem;
        background-image: url(${HeroImg});
        background-position: center;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        .introduction {
            position: absolute;
            top: 50%;
            left: 48%;
            transform: translate(-50%, -50%);
        }
    }
    .introduction-heading {
        font-size: 4rem;
        margin-top: 1rem;
        color: #14e414;
    }

    transition: all 0.3s;
    .darkmodeBth {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
        transform: ${(props) =>
            props.darkMode ? "rotate(0deg)" : "rotate(-181deg)"};
    }
    color: ${(props) => (props.darkMode ? "#fff" : "#000")};
    main {
        width: 80%;
        margin: 0 auto;
    }
`;

export const HeroSection = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${HeroImg});
    background-position: left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 98;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
`;
