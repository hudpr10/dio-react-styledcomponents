import Header from '../../components/Header';
import { Column, Container, Title, TitleHighlight } from './style';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

const Home = () => {
    return (
        <>
            <Header login={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1} >
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo 
                        name="Usuario" 
                        image="https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3"
                        percentual='75'
                    />
                    <UserInfo 
                        name="Usuario" 
                        image="https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3"
                        percentual='50'
                    />
                    <UserInfo 
                        name="Usuario" 
                        image="https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3"
                        percentual='40'
                    />
                    <UserInfo 
                        name="Usuario" 
                        image="https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3"
                        percentual='35'
                    />
                    <UserInfo 
                        name="Usuario" 
                        image="https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3"
                        percentual='20'
                    />
                </Column>
            </Container>
        </>
    )
}

export default Home;