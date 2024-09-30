import styled from "styled-components";

const MainContainer = styled.main`
    width: 80%;
    height: 90vh;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PageTitle = styled.h2`
    font-size: 32px;
    width: 400px;
    line-height: 50px;
`

const FormContainer = styled.div`
    width: 300px;
`

const SubTitle = styled.p`
    font-size: 18px;
    margin: 8px 0 32px 0;
`

const SupportText = styled.p`
    font-size: 14px;
`

const LinkText = styled.span`
    font-size: 14px;
    color: var(--green);
    cursor: pointer;
`

export {
    MainContainer,
    PageTitle,
    FormContainer,
    SubTitle,
    LinkText,
    SupportText
}