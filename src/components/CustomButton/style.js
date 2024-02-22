import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 15px;
  cursor: pointer;
`

export const ButtonContent = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #052138;
  padding: 12px;
`
