import styled, { css } from "styled-components";

const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: var(--white);
`

const Wrapper = styled.div`
    max-width: 300px;
`

const Column = styled.div`
    display: flex;
    justify-content: end;
    flex: 1;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`

const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    line-height: 25px;
    margin-bottom: 30px;

`

const SpecialText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 19px;

    ${({ type }) => {
        if(type === 'forgot') {
            return css`
                color: var(--yellow);
            `
        } else if(type === 'new') {
            return css`
                color: var(--new-acount);
            `
        }
    }}
`

export {
    Container,
    Title,
    Wrapper,
    Column,
    Row,
    TitleLogin,
    SubtitleLogin,
    SpecialText,
}