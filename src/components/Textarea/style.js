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

export const TextareaContainer = styled.textarea`
  background: #eff1f3;
  border: none;
  border-radius: 25px;
  outline: none;
  padding: 13px;
  font-size: 14px;
  &::placeholder {
    color: #b3bac3;
  }
`

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #ed4337;
`
