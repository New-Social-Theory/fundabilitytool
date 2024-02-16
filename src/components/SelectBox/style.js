import styled, { css } from 'styled-components'

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

export const InputSpan = styled.span`
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
  ${(props) =>
    props.isChecked &&
    css`
      &::after {
        display: block;
      }
    `}
  &::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  gap: 5px;
  border-radius: 0;
  color: #b3bac3;
  &.checked {
    color: black;
  }
`

export const InputContent = styled.input`
  cursor: pointer;
  accent-color: black;
  margin: 0;
  padding: 5px;
  width: 18px;
  height: 18px;
  border: 1px solid #b3bac3;
  border-width: 5px 3px 3px 5px;
  margin-right: 5px;
  &.checked {
    border-color: rgba(179, 186, 195, 1);
  }
`

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #ed4337;
`

