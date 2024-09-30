import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from './style';
import iconLike from '../../assets/like.png'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://aplex.com.br/images/default-source/default-album/blog-aplex-seguranca-documentos-imagens.jpeg?sfvrsn=a594ff41_3'/>
                    <div>
                        <h4>Usuario</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp DIO do Global Avanade... <strong>saiba mais</strong></p>
                    <HasInfo>
                        <h4>#HTML #CSS #Javascript</h4>
                        <p>
                            <img src={iconLike} alt='Icone de Like'/>
                            10
                        </p>
                    </HasInfo>
                </PostInfo>
            </Content>
        </CardContainer>
    )
}

export default Card;