import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 80px;
  cursor: pointer;
  padding: 16px 30px;
`

export const ButtonContent = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #052138;
  color: ${(props) => props.color};
`
