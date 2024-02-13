import Input from '../../components/Input'
import OnboardingHeader from '../../components/OnboardingHeader'
import SelectCheckBox from '../../components/SelectCheckBox'
import SubmitButton from '../../components/SubmitButton'
import { Wrapper, FormContainer } from './style'
import Textarea from '../../components/Textarea'
import { app } from '../../firebase/firebase'
import { getDatabase, set, ref } from 'firebase/database'
import { FormProvider, useForm } from 'react-hook-form'


const db = getDatabase(app)

const Onboarding = () => {
  // eslint-disable-next-line
  const { register, handleSubmit, control } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  

  // eslint-disable-next-line
  const setUser = (userData) => {
    set(ref(db, 'users/' + userData.email), {
      email: userData.email,
      age: userData.age,
      country: userData.country,
      startup_focused: userData.startupFocused,
      content_creation_business: userData.contentCreationBusiness,
      followers: userData.followers,
      post_new_content: userData.postNewContent,
      engaged_audience: userData.engagedAudience,
      receive_funding: userData.receiveFunding,
    })
  }

  return (
    <>
      <Wrapper>
        <OnboardingHeader />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormProvider control={control}>
          <Input
            stateName={'email'}
            name="Please enter email"
            placeholder="name@example.com"
            register={register}

          />
          <Input
            stateName={'age'}
            name="Age"
            placeholder="Type your answer here"
            register={register}
          />
          <Input
            stateName={'country'}
            name="Country of Residence"
            placeholder="Country"
            register={register}
            
          />
          {/* <SelectCheckBox
            name="Is your startup consumer or enterprise focussed?"
            rounded={true}
            items={[
              'Sports',
              'Fashion',
              'Fitness',
              'Travel',
              'News',
              'Podcast',
              'Comedy',
              'Gaming',
              'Streaming',
              'Independent Media',
              'Entertainment',
              'Wellness',
              'Anime',
              'History',
            ]}
            id={"startup_focused"}
            register={register}
          /> */}
          <Textarea
            register={register}
            stateName={'content_creation_business'}
            name="Describe your content creation business in 100 words or less"
            placeholder="Type your answer here"
            rows={4}
          />
          <SelectCheckBox
            name="How many followers/subscribers do you have?"
            items={[
              'Less than 1,000',
              '1,000 - 10,000',
              '10,000 - 100,000',
              '100,000 - 1,000,000',
              'More than 1,000,000',
            ]}
            id={"followers"}
            register={register}
          />
          <SelectCheckBox
            name="How frequently do you post new content?"
            items={[
              'Rarely',
              'Once a week',
              '2-3 times a week',
              'Daily',
              'Multiple times a day',
            ]}
            id={"post_new_content"}
            register={register}
          />
          <SelectCheckBox
            name="How engaged is your audience?"
            items={[
              'Low engaged',
              'Moderate engaged',
              'High engaged',
              'Very highly engaged',
              'Super engaged',
            ]}
            id={"engaged_audience"}
            register={register}
          />
          <SelectCheckBox
            name="Would you like to receive funding to grow your creator business?"
            items={['Yes', 'No']}
            id={"receive_funding"}
            register={register}
          />
          <SubmitButton type="submit" name="Submit" />
          </FormProvider>
        </FormContainer>
      </Wrapper>
    </>
  )
}

export default Onboarding
