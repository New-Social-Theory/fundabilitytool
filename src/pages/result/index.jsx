import { Wrapper, ImageContainer,Title, Description, FooterDescription, FooterTitle , FooterContainer } from './style'
import Girl from '../../assets/dancing_girl.svg'
import Tip from '../../components/Tip'

const Result = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={Girl} alt="Girl" width={230} height={230} />
      </ImageContainer>
      <Description>Congratulations on completing the survey! Based on your responses, we have evaluated the fundability potential of your profile. Here are your results:</Description>
      <Title>Moderate</Title>
      <FooterContainer>
        <FooterTitle>Recommendations</FooterTitle>
        <FooterDescription>These are the areas where your venture may need further development or attention.</FooterDescription>
        <Tip title="TIP #1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Tip title="TIP #2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </FooterContainer>
    </Wrapper>
  )
}

export default Result
