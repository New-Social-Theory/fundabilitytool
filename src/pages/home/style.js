import styled from 'styled-components'
// import BackgroundVector from '../../assets/background-vector.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #052138;
  // background-size: cover;
  background-image: url(https://assets-global.website-files.com/65a61feac89be4ad21205289/65d2e73955604fbc0431dc33_TestBG.gif);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-position: 50% -20px;
  background-size: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  max-width: 343px;
  width: 100%;
`
export const Title = styled.span`
  font-size: 36px;
  line-height: 48px;
  color: #f0f0f0;
  font-family: 'ClashGrotesk';
  font-weight: 400;
`

export const TitleBold = styled.span`
  font-size: 36px;
  line-height: 48px;
  color: #f0f0f0;
  font-weight: bold;
`

export const Description = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding: 0px 9px;
  font-weight: 400;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: #f7f8f9;
  border-radius: 50%;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  background: radial-gradient(
    circle at center,
    rgba(75, 255, 196, 0.2) 45%,
    transparent,
    transparent
  );
  width: 175px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  color: #052138;
  font-weight: 700;
  font-family: 'ClashGrotesk';
`

export const FooterContent = styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 20px;
  color: #ffffff;
  justify-content: center;
  font-weight: 400;
`

export const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
`

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`

export const LogoTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 5px;
`
