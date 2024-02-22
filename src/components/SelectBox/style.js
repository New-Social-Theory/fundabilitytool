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

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

export const InputContainerCheckbox = styled.label`
  display: flex;
  padding: 0 15px;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  gap: 5px;
  border-radius: 0;
  color: #b3bac3;
  max-width: 180px;
  min-height: 40px;
  background-color: white;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 20px;
  &.checked {
    color: black;
  }
`

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  gap: 5px;
  border-radius: 0;
  color: #b3bac3;

  &.checked {
    color: black;
  }
  > span {
    display: inline-block;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  
`

export const InputContent = styled.input`
  cursor: pointer;
  accent-color: black;
  margin: 0;
  padding: 5px;
  width: 18px;
  height: 18px;
  border-width: 5px 3px 3px 5px;
  margin-right: 5px;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  display: grid;
  place-content: center;
  &.checked {
    ::before {
      transform: scale(1);
    }
    border-color: rgba(179, 186, 195, 1);
  }
  ::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }
`

export const InputContentCheckbox = styled.input`
  cursor: pointer;
  accent-color: black;
  margin: 0;
  padding: 5px;
  width: 18px;
  height: 18px;
  border: 1px solid #b3bac3;
  border-width: 5px 3px 3px 5px;
  margin-right: 5px;
  border-radius: 50%;
  &.checked {
    border-color: rgba(179, 186, 195, 1);
  }
`

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #ed4337;
`
