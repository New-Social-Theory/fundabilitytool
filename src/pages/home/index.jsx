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
  ButtonWrapper,
  CompanyContainer,
  LogoTitle
} from './style'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'


const Home = () => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    if(localStorage.getItem('formData')) {
      localStorage.removeItem('formData')
    }
    navigate('/onboarding')
  }

  return (
    <>
      <Wrapper>
        <Content>
          <CompanyContainer>
            <img src={Logo} />
            <LogoTitle>Capital.P</LogoTitle>
          </CompanyContainer>
          <Title>
            Welcome to the <TitleBold>Fundability Tool</TitleBold>
          </Title>
          <Description>
            This survey will assess the fundability of your business or project
            by evaluating key factorsthat potential funders consider
          </Description>
          <ButtonWrapper>
            <Button onClick={handleRedirect}>
            <ButtonContent>START</ButtonContent>
          </Button>
          </ButtonWrapper>
          
        </Content>
        <Footer>
          <FooterContent>Powered by © 2024 Capital P.</FooterContent>
        </Footer>
      </Wrapper>
    </>
  )
}

export default Home
