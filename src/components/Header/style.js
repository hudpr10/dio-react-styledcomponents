import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    background-color: var(--black);
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchInputContainer = styled.div`
    background-color: var(--gray-dark);
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;

    input {
        outline: none;
    }
`

const Menu = styled.a`
    font-style: normal;
    font-size: 0.75;
    line-height: 25px;
    color: var(--white);
    margin-right: 12px;
    text-decoration: none;
`

const MenuRight = styled.a`
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: var(--white);
    margin-right: 12px;
    text-decoration: none;
`

const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid var(--white);
`

const Input = styled.input`
    background-color: transparent;
    flex: 1;
    border: none;
    color: var(--white);
`

export {
    HeaderContainer,
    Row,
    Column,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
}