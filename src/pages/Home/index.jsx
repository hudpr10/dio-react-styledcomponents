import Header from '../../components/Header';
import {
    Container,
    Title,
    TitleHightlight,
    TextContent,
} from './style';
import banner from '../../assets/banner.png'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHightlight>Implemente</TitleHightlight>
                        <br />
                        o seu futuro global agora!
                    </Title>
                    <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo encare seu novo desafio profissional, evoluindo em comunidade com as melhores experts</TextContent>
                    <Button title='Começar agora' variant='secondary' handleClick={() => {handleClickSignIn()}} />
                </div>
                <div>
                    <img src={banner} alt="Imagem principal" />
                </div>
            </Container>
        </>
    )
}

export default Home;