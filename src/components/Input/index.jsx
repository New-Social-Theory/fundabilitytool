import { useEffect, useState } from 'react'
import { Wrapper, Label, InputContainer, ErrorMessage } from './style'

const Input = ({ name, placeholder, register, errors, required, label = true, disabled, inputPoints, watch}) => {
  const [isWritten, setIsWritten] = useState(false)

  useEffect(() => {
    if(watch && watch(name)){
      setIsWritten(true)
    }
  },[])

  const handleChange = (event) => {
    const { value } = event.target;
    const points = JSON.parse(localStorage.getItem('quizPoints'))
    if(value){
      if(isWritten){
        return
      }
      localStorage.setItem("quizPoints", JSON.stringify(points + inputPoints))
      setIsWritten(true)
      return
    }

    localStorage.setItem("quizPoints", JSON.stringify(points - inputPoints))
    setIsWritten(false)
    return
  }

  return (
    <Wrapper disabled={disabled}>
      {label && <Label>{name}</Label>}
      {register ? <InputContainer
          placeholder={placeholder}
          {...register(name, { 
            required: required ? required : false,
            onChange: (e) => handleChange(e)
          
          })}
          disabled={disabled}
      /> : <InputContainer
      placeholder={placeholder}
      disabled={disabled}
  /> }
      
      <ErrorMessage>{errors && errors[name] && errors[name].message ? errors[name].message : null}</ErrorMessage>
    </Wrapper>  
  )
}

export default Input
  