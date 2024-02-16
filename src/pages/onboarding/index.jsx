import Input from '../../components/Input'
import OnboardingHeader from '../../components/OnboardingHeader'
import SelectBox from '../../components/SelectBox'
import SubmitButton from '../../components/SubmitButton'
import { Wrapper, FormContainer } from './style'
import Textarea from '../../components/Textarea'
import { app } from '../../firebase/firebase'
import { getDatabase, set, ref } from 'firebase/database'
import { FormProvider, useForm } from 'react-hook-form'
import { quiz } from '../../data/quizData'
import { useEffect } from 'react'

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

  useEffect(() => {
    console.log(formState.errors)
  }, [formState])

  const watchAllFields = watch()

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'))

    if (storedData && Object.keys(storedData).length) {
      Object.keys(storedData).forEach((groupName) => {
        setValue(`${groupName}`, storedData[groupName])
      })
    }
  }, [setValue])

  useEffect(() => {
    if (watchAllFields && Object.keys(watchAllFields).length) {
      localStorage.setItem('formData', JSON.stringify(watchAllFields))
    }
  }, [watchAllFields])

  const onSubmit = (data) => {
    set(ref(db, 'usersQuiz/' + data['Please enter email']), {
      data,
    })
  }

  const renderQuiz = () => {
    return quiz.map((question) => {
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
              name={question.question}
              placeholder={question.placeholder}
              errors={formState.errors}
              register={register}
              required={question.required}
            />
          )
        case 'checkbox':
          if (!question.answers.length) {
            throw new Error('answers field is required')
          }
          return (
            <SelectBox
              name={question.question}
              type={question.questionType}
              items={question.answers}
              errors={formState.errors}
              register={register}
              getValues={getValues}
              required={question.required}
            />
          )
        case 'radio':
          if (!question.answers.length) {
            throw new Error('answers field is required')
          }
          return (
            <SelectBox
              name={question.question}
              type={question.questionType}
              items={question.answers}
              errors={formState.errors}
              register={register}
              getValues={getValues}
              required={question.required}
            />
          )
        case 'textarea':
          if (!question.placeholder) {
            throw new Error('placeholder field is required')
          }
          return (
            <Textarea
              name={question.question}
              placeholder={question.placeholder}
              register={register}
              errors={formState.errors}
              rows={4}
              required={question.required}
            />
          )
      }
    })
  }

  return (
    <>
      <Wrapper>
        <OnboardingHeader />
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
