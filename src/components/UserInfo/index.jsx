import {
    Container,
    NameText,
    Progress,
    UserPicture,
} from './style'

const UserInfo = ({ name, image, percentual }) => {
    return (
        <Container>
            <UserPicture src={image} alt='Foto' />
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    )
}

export default UserInfo;