import Input from '../../components/Input'
import OnboardingHeader from '../../components/OnboardingHeader'
import SelectBox from '../../components/SelectBox'
import SubmitButton from '../../components/SubmitButton'
import { Wrapper, FormContainer, QuizName } from './style'
import Textarea from '../../components/Textarea'
import { app } from '../../firebase/firebase'
import { getDatabase, set, ref } from 'firebase/database'
import { FormProvider, useForm } from 'react-hook-form'
import { quiz } from '../../data/quizData'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const db = getDatabase(app)

const Onboarding = () => {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState,
    register,
    getValues,
  } = useForm()

  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);

  const watchAllFields = watch()

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'))

    if (storedData && Object.keys(storedData).length) {
      Object.keys(storedData).forEach((groupName) => {
        if(groupName === 'step') {
          setCurrentStep(storedData[groupName])
        } 
        if(groupName === 'fields') {
          Object.keys(storedData[groupName]).forEach((field) => {
            setValue(`${field}`, storedData[groupName][field])
          })
        }
        
      })
    }
  }, [setValue])

  useEffect(() => {
    if (watchAllFields && Object.keys(watchAllFields).length) {
      localStorage.setItem('formData', JSON.stringify({
        step: currentStep,
        fields: watchAllFields
      }))
    }
  }, [watchAllFields])

  const onSubmit = (data) => {
    console.log(data)

    if(currentStep < 5) {
      nextStep((prev) => prev + 1)
      return
    }
    const points = JSON.parse(localStorage.getItem('quizPoints'))
    const id = uuidv4();
    const quizData = {...data, points: points}
    set(ref(db, 'usersQuiz/' + id), {
      quizData
    }).then(() => {
      localStorage.removeItem('formData')
      navigate('/result')
    })

  }

  const renderQuiz = () => {

    const currentQuiz = quiz.find((q) => q.progress === currentStep);
    if(!currentQuiz) throw new Error('no questions') 

    return currentQuiz.questions.map((question) => {
      if (!question) return null;
      if (!question.questionType) {
        throw new Error('quiestionType field is required')
      } else if (!question.question) {
        throw new Error('question field is required')
      }

      switch (question.questionType) {
        case 'input':
          if (!question.placeholder) {
            throw new Error('placeholder field is required')
          }
          return (
            <Input
              key={question.question}
              name={question.question}
              placeholder={question.placeholder}
              errors={formState.errors}
              register={register}
              required={question.required}
              inputPoints = {question.points}
              watch={watch}
              currency={question.currency}
            />
          )
        case 'number':
            if (!question.placeholder) {
              throw new Error('placeholder field is required')
            }
            return (
              <Input
                key={question.question}
                name={question.question}
                placeholder={question.placeholder}
                errors={formState.errors}
                register={register}
                required={question.required}
                inputPoints = {question.points}
                type={question.questionType}
                watch={watch}
                currency={question.currency}
              />
            )
        case 'checkbox':
          if (!question.answers.length) {
            throw new Error('answers field is required')
          }
          return (
            <SelectBox
              key={question.question}
              name={question.question}
              type={question.questionType}
              items={question.answers}
              errors={formState.errors}
              register={register}
              getValues={getValues}
              required={question.required}
              max={question.max}
            />
          )
        case 'radio':
          if (!question.answers.length) {
            throw new Error('answers field is required')
          }
          return <>
          <SelectBox
                key={question.question}
                name={question.question}
                type={question.questionType}
                items={question.answers}
                errors={formState.errors}
                register={register}
                getValues={getValues}
                required={question.required}
                watch={watch}
              />
          </>
        case 'textarea':
          if (!question.placeholder) {
            throw new Error('placeholder field is required')
          }
          return (
            <Textarea
              key={question.question}
              name={question.question}
              placeholder={question.placeholder}
              register={register}
              errors={formState.errors}
              rows={4}
              required={question.required}
              inputPoints = {question.points}
              watch={watch}
            />
          )
      }
    })
  }

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <Wrapper>
        <OnboardingHeader step={currentStep}/>
        <QuizName>{quiz && quiz[currentStep] && quiz[currentStep].name}</QuizName>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormProvider control={control}>
            {renderQuiz()}
            <SubmitButton
              isDisabled={!formState.isDirty}
              type="submit"
              name="Submit"
            />
          </FormProvider>
        </FormContainer>
      </Wrapper>
    </>
  )
}

export default Onboarding
