import styled from "styled-components";

const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid var(--gray-light);

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const IconContainer = styled.div`
    margin-right: 10px;
    
    img {
        width: 20px;
        height: 20px;
    }
`

const InputStyled = styled.input`
    background-color: transparent;
    color: var(--white);
    border: none;
    height: 30px;
    width: 100%;
    outline: none;
`

const TextError = styled.p`
    color: var(--danger);
    font-size: 12px;
    margin: 4px 0 12px 12px;
`

export {
    InputContainer,
    IconContainer,
    InputStyled,
    TextError
}