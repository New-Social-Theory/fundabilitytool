import {
  Wrapper,
  ImageContainer,
  Range,
  Title,
  Description,
  FooterDescription,
  FooterTitle,
  ButtonContainer,
  FooterContainer,
  TitleContainer,
  HeaderContainer,
  FooterContent
} from './style'
import Man from '../../assets/result_tennis.svg'
import Tip from '../../components/Tip'
import CustomButton from '../../components/CustomButton'

const Result = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <ImageContainer>
          <img src={Man} alt="Man" width={165} height={165} />
        </ImageContainer>
        <TitleContainer>
          <Title>High Tier Fundability</Title>
          <Description>
            Congratulations on completing the survey! Based on your responses,
            we have evaluated the fundability potential of your profile
          </Description>
          <Description>Here are your results:</Description>
          <Range>109 out of 109</Range>
          <ButtonContainer>
            <CustomButton name="Share my results" backgroundColor="#4BFFC4" />
            <CustomButton name="Send to my email" backgroundColor="#D9DDE1" />
          </ButtonContainer>
        </TitleContainer>
      </HeaderContainer>

      <FooterContainer>
        <FooterContent>
          <FooterTitle>Recommendations</FooterTitle>
          <FooterDescription>
            These are the areas where your venture may need further development or
            attention.
          </FooterDescription>
          <Tip
            title="TIP #1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </FooterContent>
        </FooterContainer>
        
    </Wrapper>
  )
}

export default Result
