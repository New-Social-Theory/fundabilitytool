import {
  Wrapper,
  ImageContainer,
  Range,
  Title,
  Description,
  TitleContainer,
  HeaderContainer,
} from './style'
import { useEffect, useState } from 'react'
import { result } from '../../data/resultData'
import Man from '../../assets/result_tennis.svg'
import Amazonka from '../../assets/result_amazonka.svg'
import Holiday from '../../assets/result_holiday.svg'


const Result = () => {
  const points = JSON.parse(localStorage.getItem('quizPoints'))
  const [resultData, setResultData] = useState()

  useEffect(() => {
    if(points){
        if(points >= 0 && points <= 35){
          setResultData(result[2])
        }else if (points >= 36 && points <= 70) {
          setResultData(result[1])
        } else {
          setResultData(result[0])
        }
    }
  },[])

  const rednerImageUrl = () => {
    switch(resultData.type) {
      case 'high' : 
      return Man
      case 'mid' : 
      return Amazonka
      case 'low' :
      return Holiday
  }
  }
  return (
    <>
    {resultData &&
    <Wrapper type={resultData.type}>
      <HeaderContainer>
        <ImageContainer>
          <img src={rednerImageUrl()} width={165} height={165} />
        </ImageContainer>
        <TitleContainer>
          <Title type={resultData.type}>{resultData.name}</Title>
          <Description type={resultData.type}>
            Congratulations on completing the survey! Based on your responses,
            we have evaluated the fundability potential of your profile
          </Description>
          <Description type={resultData.type}>Here are your results:</Description>
          <Range type={resultData.type}>{points} out of 109</Range>
{/*           <ButtonContainer>
            <CustomButton 
            name="Share my results" 
            backgroundColor={resultData.type === 'high' ? "#4BFFC4" : '#052138'} 
            color={resultData.type === 'high' ? "#052138" : '#ffffff'}
            />
            <CustomButton 
            name="Send to my email" 
            color={'#001018'}
            backgroundColor="#ffffff" />
          </ButtonContainer> */}
        </TitleContainer>
      </HeaderContainer>

{/*       <FooterContainer>
        <FooterContent>
          <FooterTitle>Recommendations</FooterTitle>
          <FooterDescription>
            These are the areas where your venture may need further development or
            attention.
          </FooterDescription>
          <Tip
            title="TIP #1"
            description={resultData.recomendation}
          />
        </FooterContent>
        </FooterContainer> */}
        
    </Wrapper>
}
    </>
  )
}

export default Result
