import { useEffect, useState } from 'react'
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
  watch
}) => {

  const [previousSelectedRadioButton, setPreviousSelectedRadioButton] = useState(null)

  useEffect(() => {
    if(watch && watch(name)){
      setPreviousSelectedRadioButton(watch(name))
    }
  },[])

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const findOption = items.find(item => item.value === value)
    const points = JSON.parse(localStorage.getItem('quizPoints'))
    if(points){
      if(checked){
        localStorage.setItem("quizPoints", JSON.stringify(points + findOption.points))
        return
      }
      localStorage.setItem("quizPoints", JSON.stringify(points - findOption.points))
      return
    }

    localStorage.setItem("quizPoints", JSON.stringify(findOption.points))
    return
  }

  const handleRadioChange = (event) => {
    const { value } = event.target;
    const findOption = items.find(item => item.value === value)
    const points = JSON.parse(localStorage.getItem('quizPoints'))
    if(points){
      if(previousSelectedRadioButton){
        const findPreviousOption = items.find(item => item.value === previousSelectedRadioButton)
        localStorage.setItem("quizPoints", JSON.stringify(points - findPreviousOption.points + findOption.points))
        setPreviousSelectedRadioButton(value)
        return
      }
      setPreviousSelectedRadioButton(value)
      localStorage.setItem("quizPoints", JSON.stringify(points + findOption.points))
      return
    }

    localStorage.setItem("quizPoints", JSON.stringify(findOption.points))
    return
  }

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
                  key={item.value}
                  className={isValueChecked ? 'checked' : ''}
                >
                  <InputContentCheckbox
                    name={name}
                    type="checkbox"
                    value={item.value}
                    className={isValueChecked ? 'checked' : ''}
                    {...register(name, {
                      required: required ? required : false,
                      onChange: (e) => handleCheckboxChange(e)
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
      const isValueChecked =
        getValues(name) && getValues(name).includes(item.value)
      return (
        <>
          <InputContainer
            key={item.value}
            className={isValueChecked ? 'checked' : ''}
          >
            <InputContent
              name={name}
              type="radio"
              value={item.value}
              className={isValueChecked ? 'checked' : ''}
              {...register(name, { 
                required: required ? required : false,
                onChange: (e) => handleRadioChange(e)
              })}
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
