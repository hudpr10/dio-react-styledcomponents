import ButtonStyled from "./style";

const Button = ({ title, variant='primary', handleClick }) => {
    return (
        <ButtonStyled
            variant={variant}
            onClick={handleClick}
        >
            {title}
        </ButtonStyled>
    )
}

export default Button;