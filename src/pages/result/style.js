import styled from 'styled-components'
import BackgroundVector from '../../assets/background-vector.svg'
import BackgroundVector2 from '../../assets/background_vector2.svg'
import BackgroundVector3 from '../../assets/background_vector3.svg'

const renderBackgroundUrl = (type) => {
  switch (type) {
    case 'high':
      return `url(${BackgroundVector})`
    case 'mid':
      return `url(${BackgroundVector2})`
    case 'low':
      return `url(${BackgroundVector3})`
  }
}

const renderBackgroundColor = (type) => {
  switch (type) {
    case 'high':
      return '#052138'
    case 'mid':
      return '#4BFFC4'
    case 'low':
      return '#FFC700'
  }
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => renderBackgroundUrl(props.type)};
  background-color: ${(props) => renderBackgroundColor(props.type)};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 380px) {
    background-repeat: repeat;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`

export const ImageContainer = styled.div``

export const Description = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => (props.type === 'high' ? '#f0f0f0' : '#052138')};
  text-align: center;
  padding: 0px 35px;
`

export const Range = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => (props.type === 'high' ? '#f0f0f0' : '#052138')};
  font-weight: 900;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Title = styled.span`
  font-size: 28px;
  line-height: 34px;
  color: ${(props) => (props.type === 'high' ? '#f0f0f0' : '#052138')};
  font-weight: 600;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 15px;
  width: calc(100% - 30px);
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 30px 0;
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
  gap: 15px;
  padding: 10px;
`
