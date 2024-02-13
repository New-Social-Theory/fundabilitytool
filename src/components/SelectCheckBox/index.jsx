import { Wrapper, Label, InputContainer, InputContent,ErrorMessage } from './style'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const SelectCheckBox = ({ name, items, rounded, id, register }) => {
  const { errors, control } = useFormContext();

  const renderItems = () => {
    return items.map((item,index) => {
      const itemId = `${id}-${index}`;
      return (
        <React.Fragment key={itemId}>
          <InputContainer key={`container-${itemId}`}>
            <Controller
              name={`${id}[]`}
              control={control}
              rules={{ required: { value: true, message: `Please select at least one option from ${name}` } }}
              render={({ field }) => (
                <InputContent
                  {...field}
                  rounded={rounded ? 'true' : 'false'}
                  type="checkbox"
                  id={itemId}
                  {...register(`${id}[]`)}
                  value={itemId} 
                  checked={field.value ? field.value.includes(itemId) : false}
                />
              )}
            />
            <span>{item}</span>
          </InputContainer>
        </React.Fragment>
      )
    })
  }
  return (
    <Wrapper>
      <Label>{name}</Label>
      {renderItems()}
      {errors && errors[id] && <ErrorMessage>{errors[id].message}aaaaaaa</ErrorMessage>}
    </Wrapper>
  )
}

export default SelectCheckBox
