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
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: #001018;
`

export const InputDiv = styled.div`
  position: relative;
`

export const Currency = styled.div`
  position: absolute;
  font-size: 14px;
  top: 10px;
  right: 15px;
  opacity: 0.4;
`

export const InputContainer = styled.input`
  background: #eff1f3;
  border: none;
  padding: 10px;
  border-radius: 25px;
  outline: none;
  width: calc(100% - 20px);
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
