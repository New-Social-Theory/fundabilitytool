import {
  Wrapper,
  Content,
  Title,
  Description,
  Button,
  ButtonContent,
  FooterContent,
  Footer,
  TitleBold,
  ButtonWrapper
} from './style'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate('/onboarding')
  }

  return (
    <>
      <Wrapper>
        <Content>
          <Title>
            Welcome to the <TitleBold>Fundability Survey</TitleBold>
          </Title>
          <Description>
            This survey will assess the fundability of yourbusiness or project
            by evaluating key factorsthat potential funders consider
          </Description>
          <ButtonWrapper>
            <Button onClick={handleRedirect}>
            <ButtonContent>START</ButtonContent>
          </Button>
          </ButtonWrapper>
          
        </Content>
        <Footer>
          <FooterContent>POWERED BY CAPITAL P</FooterContent>
        </Footer>
      </Wrapper>
    </>
  )
}

export default Home
