import { Wrapper, Label, InputContainer, ErrorMessage } from './style'

const Input = ({ name, placeholder, register, errors, required, label = true, disabled}) => {

  return (
    <Wrapper disabled={disabled}>
      {label && <Label>{name}</Label>}
      <InputContainer
          placeholder={placeholder}
          {...register(name, { required: required ? required : false })}
          disabled={disabled}
      />
      <ErrorMessage>{errors && errors[name] && errors[name].message ? errors[name].message : null}</ErrorMessage>
    </Wrapper>  
  )
}

export default Input
  