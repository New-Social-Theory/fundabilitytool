import styled from 'styled-components'
import BackgroundVector from '../../assets/background-vector.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BackgroundVector});
  background-color: #052138;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: space-evenly;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`

export const ImageContainer = styled.div``

export const Description = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
`

export const Range = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  font-weight: 900;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Title = styled.span`
  font-size: 28px;
  line-height: 34px;
  color: #f0f0f0;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  height: 100%;
  padding: 15px;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 140%;
`

export const FooterTitle = styled.span`
  font-size: 24px;
  line-height: 27px;
  font-weight: 600;
  color: #052138;
`

export const FooterDescription = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #052138;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`
