import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
  `}
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #001018;
`

export const InputContainer = styled.input`
  background: #eff1f3;
  border: none;
  padding: 10px;
  border-radius: 25px;
  outline: none;
  padding: 11px;
  font-size: 14px;
  &::placeholder {
    color: #b3bac3;
  }
`
export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #ed4337;
`
