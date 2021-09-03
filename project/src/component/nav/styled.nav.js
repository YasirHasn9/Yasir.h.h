import styled from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    height: 8rem;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        li {
            padding: 1rem 1.5rem;
            border-radius: 2rem;
            border: 1px solid #14e414;
            font-size: 2rem;
            color: #14e414;
            transition: all 0.2s;
            font-weight: 700;
            &:hover {
                background-color: #157b1d87;
                cursor: pointer;
            }
        }
    }
`;
