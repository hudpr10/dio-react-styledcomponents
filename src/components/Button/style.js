import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
    background-color: var(--gray);
    border-radius: 22px;
    position: relative;

    color: var(--white);
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: none;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        opacity: 0.6;
    }

    ${({ variant }) => {
        return variant !== "primary" && css`
            /*min-height: 167px;*/
            height: 33px;

            background-color: var(--pink);

            &::after {
                content: '';
                position: absolute;
                border: 1px solid var(--pink);
                top: -5px;
                left: -6px;
                width: calc(100% + 10px);
                height: calc(100% + 10px);
                border-radius: 22px;
            }
        `
    }}
`

export default ButtonStyled;