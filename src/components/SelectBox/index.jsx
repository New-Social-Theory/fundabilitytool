import { Wrapper, Label, InputContainer, InputContent, ErrorMessage } from './style'

const SelectBox = ({
  name,
  items,
  type,
  register,
  errors,
  required,
  getValues
}) => {

  const renderItems = () => {
    if (type === 'checkbox') {
      return items.map((item) => {
      
        const isValueChecked = getValues(name) && getValues(name).includes(item.value)
        return (
          <InputContainer key={item.name} className={isValueChecked ? 'checked' : ''}>
            <InputContent
              name={name}
              type="checkbox"
              value={item.value}
              className={isValueChecked ? 'checked' : ''}
              {...register(name, { required: required ? required : false })}
            />
            {item.label}
          </InputContainer>
        )
      })
    }

    return items.map((item) => {
      const isValueChecked = getValues(name) && getValues(name).includes(item.value)
      return (
        <InputContainer key={item.name}  className={isValueChecked ? 'checked' : ''}>
          <InputContent
            name={name}
            type="radio"
            value={item.value}
            className={isValueChecked ? 'checked' : ''}
            {...register(name, { required: required ? required : false })}
          />
          {item.label}
        </InputContainer>
      )
    })
  }

  return (
    <Wrapper>
      <Label>{name}</Label>
      {renderItems()}
      <ErrorMessage>{errors && errors[name] && errors[name].message ? errors[name].message : null}</ErrorMessage>
    </Wrapper>
  )
}

export default SelectBox
