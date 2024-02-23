import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #d9dde1;

  width: 100%;
`

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Title = styled.span`
    font-size 18px;
    font-weight: 700;
    line-height: 24px;
    color: #001018;
    max-width: 335px;
`

export const Description = styled.span`
    font-size 16px;
    font-weight: 400;
    line-height: 21px;
    color: #687787;
    width: 100%;
`
