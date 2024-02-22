import Input from '../Input'
import {
  Wrapper,
  Label,
  InputContainer,
  InputContent,
  ErrorMessage,
  ItemsWrapper,
  InputContentCheckbox,
  InputContainerCheckbox,
} from './style'

const SelectBox = ({
  name,
  items,
  type,
  register,
  errors,
  required,
  getValues,
}) => {
  const renderItems = () => {
    if (type === 'checkbox') {
      return (
        <ItemsWrapper>
          {items.map((item) => {
            const isValueChecked =
              getValues(name) && getValues(name).includes(item.value)
            return (
              <>
                <InputContainerCheckbox
                  key={item.name}
                  className={isValueChecked ? 'checked' : ''}
                >
                  <InputContentCheckbox
                    name={name}
                    type="checkbox"
                    value={item.value}
                    className={isValueChecked ? 'checked' : ''}
                    {...register(name, {
                      required: required ? required : false,
                    })}
                  />
                  <span> {item.label}</span>
                </InputContainerCheckbox>
              </>
            )
          })}
        </ItemsWrapper>
      )
    }

    return items.map((item) => {
      console.log(item, 'item')
      const isValueChecked =
        getValues(name) && getValues(name).includes(item.value)
      return (
        <>
          <InputContainer
            key={item.name}
            className={isValueChecked ? 'checked' : ''}
          >
            <InputContent
              name={name}
              type="radio"
              value={item.value}
              className={isValueChecked ? 'checked' : ''}
              {...register(name, { required: required ? required : false })}
            />
           <span> {item.label}</span>
          </InputContainer>
          {item.additionalData && (
            <Input
              name={`${name}: Other`}
              label={false}
              placeholder={'Type your answer here'}
              register={register}
              disabled={!isValueChecked}
            />
          )}
        </>
      )
    })
  }

  return (
    <Wrapper>
      <Label>{name}</Label>
      {renderItems()}
      <ErrorMessage>
        {errors && errors[name] && errors[name].message
          ? errors[name].message
          : null}
      </ErrorMessage>
    </Wrapper>
  )
}

export default SelectBox
