import { ButtonContainer, ButtonContent } from './style'

const CustomButton = ({ name, backgroundColor }) => {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <ButtonContent>{name}</ButtonContent>
    </ButtonContainer>
  )
}

export default CustomButton
