import { ButtonContainer, ButtonContent } from './style'

const CustomButton = ({ name, backgroundColor, color }) => {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <ButtonContent color={color}>{name}</ButtonContent>
    </ButtonContainer>
  )
}

export default CustomButton
