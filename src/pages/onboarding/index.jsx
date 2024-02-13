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
            stateName={'country'}
            name="Country of residence"
            placeholder="Type your answer here"
            register={register}
          />
          <Input
            stateName={'age'}
            name="Age"
            placeholder="Type your answer here"
            register={register}
          />
          <Textarea
            register={register}
            stateName={'content_creation_business'}
            name="Describe your content creation business in 100 words or less"
            placeholder="Type your answer here"
            rows={4}
          />
          
          <SelectCheckBox
            name="Please pick the topics which best describes your content (max 3)"
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
          />
          <SelectCheckBox
            name="What is your primary revenue generating Content Platform"
            items={[
              'Youtube',
              'Tiktok',
              'Instagram',
              'Twitch',
              'Substack',
              'Other'
            ]}
            id={"content"}
            register={register}
          />
          <Input
            stateName={'revenue'}
            name="Please provide the link to your highest revenue generating channel"
            placeholder="Type your answer here"
            register={register}
          />
          <SelectCheckBox
            name="How many years have you been generating content?"
            items={[
              'Drop down',
              '1 - 20 years',
              'less than 1 year',
            ]}
            id={"years"}
            register={register}
          />
          <Input
            stateName={'years_full'}
            name="How many years have you been creating content full time as your primary source of revenue?"
            placeholder="Type your answer here"
            register={register}
          />
          <SelectCheckBox
            name=" Please provide a range of revenue from your primary content platfrom listed above"
            items={[
              '0 - 100,000',
              '100,000 - 250,000',
              '250,000 - 500,000',
              '500,000 - 750,000',
              '1,000,000 - 1,500,000',
              '1,500,000 - 2,000,000',
              '2,000,000 - 2,500,000',
              '2,500,000 +',
            ]}
            id={"range_of_revenue"}
            register={register}
          />
          <SelectCheckBox
            name="If any, what subscription platform do you use to help grow your business?"
            items={[
              'Buy me a coffee',
              'Ko-FI',
              'patreon',
              'memberful',
              'do not use one',
              'other',
            ]}
            id={"subscription_platform"}
            register={register}
          />
          <Input
            stateName={'monthly_payments'}
            name="If yes, What is your monthly payments from a subscription platform you use to grow your business?"
            placeholder="Type your answer here"
            register={register}
          />
          <SelectCheckBox
            name="Have you sought investment in your businesses?"
            items={[
              'Yes',
              'No'
            ]}
            id={"sought"}
            register={register}
          />
          <Input
            stateName={'service_providers'}
            name="If yes, what service providers have you used?"
            placeholder="Type your answer here"
            register={register}
          />
          <Textarea
            register={register}
            stateName={'main_problems'}
            name="What are the main problems in 100 words or less for receiving funding for your business?"
            placeholder="Type your answer here"
            rows={4}
          />
          
          <SelectCheckBox
            name="have you sold a stake in your highest revenue generating channel listed above?"
            items={[
              'Yes',
              'No'
            ]}
            id={"sold_stake"}
            register={register}
          />
          <Input
            stateName={'percentage'}
            name="If yes, What % ?"
            placeholder="Type your answer here"
            register={register}
          />
          
          <Textarea
            register={register}
            stateName={'reasons'}
            name="if no, what have been the main reasons for not  - 100 words or less"
            placeholder="Type your answer here"
            rows={4}
          />
          
          <SelectCheckBox
            name="Do you have a team of full time staff?"
            items={[
              'Yes',
              'No',
              'Other'
            ]}
            id={"full_time_staff"}
            register={register}
          />
          
          <SelectCheckBox
            name="Do you use any of the below monetization platforms?"
            items={[
              'Floatplane',
              'Substack',
              'Podia',
              'ThinkIFC',
              'Gum Road',
              'Teachable',
              'Other',
            ]}
            id={"monetization"}
            register={register}
          />
          
          <SelectCheckBox
            name="Do you have a credit score by Ficore or Vantage?"
            items={[
              'FICO Score Ranges:',
              'Exceptional: 800 and above',
              'Very Good: 740 to 799',
              'Good: 670 to 739',
              'Fair: 580 to 669',
              'Poor: 579 and below',
              'VantageScore Ranges:',
              'Excellent: 781 to 850',
              'Good: 661 to 780',
              'Fair: 601 to 660',
              'Poor: 500 to 600',
              'Very Poor: 300 to 499'
            ]}
            id={"credit_score"}
            register={register}
          />
          
          <Input
            stateName={'required_capital'}
            name="How much capital do you require to grow your business?"
            placeholder="Type your answer here"
            register={register}
          />
          <SelectCheckBox
            name="Do you have a credit score by Ficore or Vantage?"
            items={[
              'Business plan',
              'auditing and accounting',
              'No debt',
              'No equity loss',
              'Revenue share security',
              'Expansion',
              'Backend support',
              'Business plans',
              'Production team',
              'Creative strategy',
              'Brand partnership',
              'Financial advice',
              'Accounting and auditing',
              'Mental health support',
              'Merchandise sourcing ',
              'Product management',
              'Brand design and architecture',
            ]}
            id={"credit_score"}
            register={register}
          />
          <SelectCheckBox
            name="Would you be interested in raising capital directly from your followers using a revenue share financial security? SEC Regulated"
            items={[
              'Yes',
              'No',
            ]}
            id={"SEC"}
            register={register}
          />
          
          <SelectCheckBox
            name="How much do you think your fans woud invest in a capital raising project to grow your business?"
            items={[
              '$25',
              '$50',
              '$100',
              '$150',
              '$200',
              '$250',
            ]}
            id={"investment"}
            register={register}
          />

          <Input
            stateName={'engagement'}
            name="What is your engagment rate on your revenue generating channel?"
            placeholder="Type your answer here"
            register={register}
          />
          
          {/* <SelectCheckBox
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
          /> */}
          <SubmitButton type="submit" name="Submit" />
          </FormProvider>
        </FormContainer>
      </Wrapper>
    </>
  )
}

export default Onboarding
