import { ButtonContainer, ButtonContent } from './style'

const SubmitButton = ({ name, onClick, type = 'submit' }) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      <ButtonContent>{name}</ButtonContent>
    </ButtonContainer>
  )
}

export default SubmitButton
