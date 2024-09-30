import { Controller } from 'react-hook-form';
import {
    InputContainer,
    IconContainer,
    InputStyled,
    TextError
} from './style';

const Input = ({ icon, name, control, errorMsg, ...rest }) => {
    return (
        <>
            <InputContainer>
                {icon ? <IconContainer>{<img src={icon} alt='icone' />}</IconContainer> : null}
                <Controller 
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputStyled {...field} {...rest} />}
                />
            </InputContainer>
            {errorMsg ? <TextError>{errorMsg}</TextError> : null}
        </>
    );
}

export default Input;