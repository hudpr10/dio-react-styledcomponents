import styled from 'styled-components';

const CardContainer = styled.div`
    width: 100%;
    background-color: var(--gray-blue);
    position: relative;
    margin-bottom: 24px;
`

const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: var(--white);
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--white);
    }
`

const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid var(--white);
`

const PostInfo = styled.div`

    margin-bottom: 12px;

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: var(--white);
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`

const HasInfo = styled.div`
    margin-top: 12px;

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;    
        color: var(--white);
        opacity: 0.8;
    }

    p {
        margin-top: 8px;
        display: flex;
        gap: 8px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;

        img {
            width: 24px;
            height: 24px;
        }
    }
`

export {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
}