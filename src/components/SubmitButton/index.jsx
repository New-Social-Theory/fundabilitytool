import { ButtonContainer, ButtonContent } from './style'

const SubmitButton = ({ name, onClick, type = 'submit' , isDisabled}) => {
  return (
    <ButtonContainer disabled={isDisabled} type={type} onClick={onClick}>
      <ButtonContent>{name}</ButtonContent>
    </ButtonContainer>
  )
}

export default SubmitButton
