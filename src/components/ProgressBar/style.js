import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #124a77;
  min-height: 62px;
  border-radius: 15px;
  display: flex;
  padding: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: center;
`

export const Filler = styled.div`
  height: 10px;
  background-color: #4bffc4;
  transition: width 500ms ease-in-out;
  display: block;
  border-radius: 10px;
  margin-top: 5px;
  width: ${props => props.width || "0%"};
`

export const Background = styled.div`
  height: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-top: 5px;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const ProgressBarContent = styled.div`
  margin: 0 15px;
`

export const ProgressText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #4bffc4;
`
