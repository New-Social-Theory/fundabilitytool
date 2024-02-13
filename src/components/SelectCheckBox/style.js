import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #001018;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const InputContent = styled.input.attrs(props => ({
  type: 'checkbox',
  checked: props.checked,
}))`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: ${(props) => (props.rounded ? '0' : '50%')};
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.span`
  color: red; 
  font-size: 12px; 
  margin-top: 5px; 
  display: block;
`;