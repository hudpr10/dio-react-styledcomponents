import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: var(--white);
    margin-bottom: 24px;
`

const TitleHighlight = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: var(--white);
    opacity: 0.7;
    margin-bottom: 24px;
`

const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;
`

export {
    Column,
    Container,
    Title,
    TitleHighlight,
}