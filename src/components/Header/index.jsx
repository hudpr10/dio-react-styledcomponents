import {
    HeaderContainer,
    Row,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './style';
import Button from '../Button'
import logoDIO from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router-dom';

const Header = ({ login=false }) => {
    const navigate = useNavigate()
    const handleSignInPage = () => {
        navigate('/sign')
    }

    const handleLoginPage = () => {
        navigate('/login')
    }

    return(
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <img src={logoDIO} alt='Logo da DIO' />
                    {login === true 
                    ?
                        <>
                            <SearchInputContainer>
                                <Input placeholder='Buscar...' />
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    : 
                        null
                    }
                </Row>
                <Row>
                    {login === true 
                    ?
                        <UserPicture 
                            src='https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3' 
                            alt='foto'
                        />
                    :
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title='Entrar' handleClick={handleLoginPage} />
                            <Button title='Cadastrar' handleClick={handleSignInPage}/>
                        </>
                    }
                </Row>
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;