import { Wrapper, Label, TextareaContainer, ErrorMessage } from './style'
import { useEffect, useState } from 'react'

const Textarea = ({ name, placeholder, rows, register, errors, required, inputPoints, watch }) => {

  const [isWritten, setIsWritten] = useState(false)

  useEffect(() => {
    if(watch && watch(name)){
      setIsWritten(true)
    }
  },[])

  const handleChange = (event) => {
    console.log(event)
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
    <Wrapper>
      <Label>{name}</Label>
      <TextareaContainer
        placeholder={placeholder}
        {...register(name, { 
          required: required ? required : false,
          onChange: (e) => handleChange(e)
        })}
        rows={rows}
      />
      <ErrorMessage>{errors && errors[name] && errors[name].message ? errors[name].message : null}</ErrorMessage>
    </Wrapper>
  )
}

export default Textarea
