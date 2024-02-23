import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #124a77;
  border-radius: 15px;
  display: flex;
  padding: 10px 0 15px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

export const Filler = styled.div`
  height: 6px;
  background-color: #4bffc4;
  transition: width 500ms ease-in-out;
  display: block;
  border-radius: 10px;
  margin-top: 5px;
  width: ${(props) => props.width || '0%'};
`

export const Background = styled.div`
  height: 6px;
  background-color: #ffffff;
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
  line-height: 24px;
  letter-spacing: 1px;
  color: #4bffc4;
`
