import { Wrapper, Label, InputContainer, ErrorMessage } from './style'

const Input = ({ name, placeholder, register, errors, required}) => {

  return (
    <Wrapper>
      <Label>{name}</Label>
      <InputContainer
          placeholder={placeholder}
          {...register(name, { required: required ? required : false })}
      />
      <ErrorMessage>{errors && errors[name] && errors[name].message ? errors[name].message : null}</ErrorMessage>
    </Wrapper>  
  )
}

export default Input
  