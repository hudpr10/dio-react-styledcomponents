import Header from '../../components/Header'
import Input from '../../components/Input';
import { MainContainer, PageTitle, FormContainer, SubTitle, LinkText, SupportText } from './style';
import personIcon from '../../assets/person.png'
import lockIcon from '../../assets/lock.png'
import mailIcon from '../../assets/mail.png'
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api'

const schema = yup.object({
    name: yup.string(),
    email: yup.string().required('Digite seu e-mail').email('Digite um e-mail válido'),
    password: yup.string().required('Crie uma senha').min(4, 'Minimo 4 caracteres'),
})

const SignIn = () => {
    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    console.log(errors)

    const navigate = useNavigate()
    const handleLoginPage = () => {
        navigate('/login')
    }

    const handleCreateUser = async (data) => {
        try {
            const response = await api.get()
            const exist = response.data.find(dataApi => dataApi.email === data.email)
            
            if(exist) {
                alert('Email já cadastrado!')
            } else {
                navigate('/feed')
            }

        } catch {
            alert('Erro de conexão, por favor tente mais tarde')
        }
    }

    return (
        <>
            <Header />
            <MainContainer>
                <PageTitle>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </PageTitle>
                <FormContainer>
                    <PageTitle>Comece agora grátis</PageTitle>
                    <SubTitle>Crie sua conta e make the change._</SubTitle>
                    <form onSubmit={handleSubmit(handleCreateUser)}>
                        <Input
                            name='text'
                            type='text'
                            icon={personIcon}
                            control={control}
                            placeholder='Nome Completo'
                            errorMsg={errors.name?.message}
                        />
                        <Input
                            name='email'
                            type='email'
                            icon={mailIcon}
                            control={control}
                            placeholder='E-mail'
                            errorMsg={errors.email?.message}
                        />
                        <Input
                            name='password'
                            type='password'
                            icon={lockIcon}
                            control={control}
                            placeholder='Senha'
                            errorMsg={errors.password?.message}
                        />
                        <Button 
                            title='Criar minha conta'
                            variant='secundary'
                        />
                    </form>
                    <SubTitle style={{marginTop:'28px'}}>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitle>
                    <SupportText>Já tenho conta. <LinkText onClick={handleLoginPage}>Fazer login</LinkText></SupportText>
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default SignIn;