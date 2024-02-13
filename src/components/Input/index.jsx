import { Wrapper, Label, InputContainer } from './style'


const Input = ({ name, placeholder, height, stateName ,register}) => {
  
  return (
    <Wrapper>
      <Label>{name}</Label>
      <InputContainer
        {...register(stateName, {
          required: { value: true, message: `${name} is required` },
        })}
        height={height}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default Input
