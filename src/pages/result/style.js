import styled from 'styled-components'
import GradientBackground from '../../assets/background.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${GradientBackground}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`

export const ImageContainer = styled.div``

export const Description = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  max-width: 343px;
  text-align: center;
`

export const Title = styled.span`
  font-size: 32px;
  line-height: 43px;
  color: #f0f0f0;
  font-family: 'Recoleta';
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 50px 20px;
`

export const FooterTitle = styled.span`
  font-size: 20px;
  line-height: 27px;
  color: #001018;
  font-family: 'Recoleta';
`

export const FooterDescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #001018;
`
