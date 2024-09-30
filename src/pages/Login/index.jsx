import Header from '../../components/Header';
import {
    Container,
    Title,
    Wrapper,
    Column,
    Row,
    TitleLogin,
    SubtitleLogin,
    SpecialText,
} from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import mailIcon from '../../assets/mail.png'
import lockIcon from '../../assets/lock.png'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api'

const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().min(4, 'A senha deve ter no mínimo 4 caracteres').required('Campo obrigatório')
})

const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleValidUser = async (data) => {
        try {
            const dataApi = await api.get()
            const exist = dataApi.data.some(dataUser => dataUser.email === data.email && dataUser.password === data.password)

            if(exist) {
                navigate('/feed')
            } else {
                alert('Email ou Senha inválidos')
            }
        } catch {
            alert('Houve um erro de conexão, tente novamente mais tarde.')
        }
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </div>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form action="" onSubmit={handleSubmit(handleValidUser)}>
                            <Input 
                                name='email' 
                                control={control} 
                                placeholder='fulano@email.com' 
                                type='email' 
                                icon={mailIcon}
                                errorMsg={errors?.email?.message}
                            />
                            <Input 
                                name='password' 
                                control={control} 
                                placeholder='********' 
                                type='password'
                                icon={lockIcon}
                                errorMsg={errors?.password?.message}
                            />
                            <Button title='Entrar' variant='secundary' />
                        </form>
                        <Row>
                            <SpecialText type='forgot'>Esqueci minha senha</SpecialText>
                            <SpecialText type='new'>Criar conta</SpecialText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login;