import { Wrapper, Label, TextareaContainer, ErrorMessage } from './style'

const Textarea = ({ name, placeholder, rows, register, errors, required }) => {
  return (
    <Wrapper>
      <Label>{name}</Label>
      <TextareaContainer
        placeholder={placeholder}
        {...register(name, { required: required ? required : false })}
        rows={rows}
      />
      <ErrorMessage>{errors && errors[name] && errors[name].message ? errors[name].message : null}</ErrorMessage>
    </Wrapper>
  )
}

export default Textarea
