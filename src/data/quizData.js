// `questionType` property created to know which data type will submit question

//  -  input | textarea | checkbox | radio

// `question` property created to know which data to display as label 

//  -  any string you want

// `placeholder` property created to know which data to display as placeholder working for input/textarea

//  -  any string you want

// `required` property created to set required questions which user should fill, 
// if user will submit without filling required question answer, it will show error message which 
// you will pass for `required` property

//  -  any string you want, for example: "This field is required"

// `answers` property created for `questionType` checkbox/radio
// you need to pass array of objects such as { label: 'label', value: 'value' } which will be the options

// `point` property created to know which answer how many points have 

// `disabled` property created  to disable element, later you will pass which question depends on to disable question


export const quiz = [
  {
    questionType: 'input',
    question: 'Please enter email',
    placeholder: 'name@example.com',
    required: 'Email is required',
    point: 10
  },
  {
    questionType: 'input',
    question: 'Age',
    placeholder: 'Age',
    required: 'Age is required',
  },
  {
    questionType: 'textarea',
    question: 'Describe your content creation business in 100 words or less',
    placeholder: 'Type your answer here',
  },
  {
    questionType: 'checkbox',
    question:
      'Please pick the topics which best describes your content (max 3)',
    answers: [
      { label: 'Sports', value: 'Sports' },
      { label: 'Fashion', value: 'Fashion' },
      { label: 'Fitness', value: 'Fitness' },
      { label: 'Travel', value: 'Travel' },
      { label: 'News', value: 'News' },
      { label: 'Podcast', value: 'Podcast' },
      { label: 'Comedy', value: 'Comedy' },
      { label: 'Gaming', value: 'Gaming' },
      { label: 'Streaming', value: 'Streaming' },
      { label: 'Independent Media', value: 'Independent Media' },
      { label: 'Entertainment', value: 'Entertainment' },
      { label: 'Welness', value: 'Welness' },
      { label: 'Anime', value: 'Anime' },
      { label: 'History', value: 'History' },
    ],
  },
  {
    questionType: 'checkbox',
    question: 'What is your primary revenue generating Content Platform',
    answers: [
      { label: 'Youtube', value: 'Youtube' },
      { label: 'Tiktok', value: 'Tiktok' },
      { label: 'Instagram', value: 'Instagram' },
      { label: 'Twitch', value: 'Twitch' },
      { label: 'Substack', value: 'Substack' },
      { label: 'Other', value: 'Other' },
    ],
  },
  {
    questionType: 'input',
    question:
      'Please provide the link to your highest revenue generating channel',
    placeholder: 'https://www.example.com/channel',
  },
  {
    questionType: 'radio',
    question: 'How many years have you been generating content?',
    answers: [
      { label: 'Drop down', value: 'Drop down' },
      { label: '1 - 20 years', value: '1 - 20 years' },
      { label: 'less than 1 year', value: 'less than 1 year' },
    ],
    required: 'Please select at least one option',
  },
  {
    questionType: 'input',
    question:
      'How many years have you been creating content full time as your primary source of revenue?',
    placeholder: ' Number of Years',
  },
  {
    questionType: 'radio',
    question:
      'Please provide a range of revenue from your primary content platfrom listed above',
    answers: [
      { label: '0 - 100,000', value: '0 - 100,000' },
      { label: '100,000 - 250,000', value: '100,000 - 250,000' },
      { label: '250,000 - 500,000', value: '250,000 - 500,000' },
      { label: '500,000 - 750,000', value: '500,000 - 750,000' },
      { label: '750,000 - 1,000,000', value: '750,000 - 1,000,000' },
      { label: '1,000,000 - 1,500,000', value: '1,000,000 - 1,500,000' },
      { label: '1,500,000 - 2,000,000', value: '1,500,000 - 2,000,000' },
      { label: '2,000,000 - 2,500,000', value: '2,000,000 - 2,500,000' },
      { label: '2,500,000 +', value: '2,500,000 +' },
    ],
  },
  {
    questionType: 'checkbox',
    question:
      'If any, what subscription platform do you use to help grow your business?',
    answers: [
      { label: 'Buy me a coffee', value: 'Buy me a coffee' },
      { label: 'Ko-FI', value: 'Ko-FI' },
      { label: 'patreon', value: 'patreon' },
      { label: 'memberful', value: 'memberful' },
      { label: 'do not use one', value: 'do not use one' },
      { label: 'other', value: 'other' },
    ],
  },
  {
    questionType: 'input',
    question:
      'If yes, What is your monthly payments from a subscription platform you use to grow your business?',
    placeholder: ' Monthly Payment Amount (USD)',
  },
  {
    questionType: 'radio',
    question: 'Have you sought investment in your businesses?',
    answers: [
      { label: 'yes', value: 'yes' },
      { label: 'no', value: 'no' },
    ],
  },
  {
    questionType: 'input',
    question: 'If yes, what service providers have you used?',
    placeholder: ' Service Providers Used',
  },
  {
    questionType: 'textarea',
    question:
      'What are the main problems in 100 words or less for receiving funding for your business?',
    placeholder: 'Type your answer here',
  },
  {
    questionType: 'radio',
    question:
      'have you sold a stake in your highest revenue generating channel listed above?',
    answers: [
      { label: 'yes', value: 'yes' },
      { label: 'no', value: 'no' },
    ],
  },
  {
    questionType: 'textarea',
    question: 'if yes',
    placeholder: 'What?',
  },
  {
    questionType: 'textarea',
    question:
      'if no, what have been the main reasons for not  - 100 words or less',
    placeholder: ' Why Not?',
  },
  {
    questionType: 'radio',
    question: 'Do you have a team of full time staff?',
    answers: [
      { label: 'yes', value: 'yes' },
      { label: 'no', value: 'no' },
      { label: 'other', value: 'other' },
    ],
  },
  {
    questionType: 'checkbox',
    question: 'Do you use any of the below monetization platforms?',
    answers: [
      { label: 'Floatplane', value: 'Floatplane' },
      { label: 'Substack', value: 'Substack' },
      { label: 'Podia', value: 'Podia' },
      { label: 'ThinkIFC', value: 'ThinkIFC' },
      { label: 'Gum Road', value: 'Gum Road' },
      { label: 'Teachable', value: 'Teachable' },
      { label: 'other', value: 'other' },
    ],
  },
  {
    questionType: 'radio',
    question: 'Do you have a credit score by Ficore?',
    answers: [
      {
        label: 'Exceptional: 800 and above',
        value: 'Exceptional: 800 and above',
      },
      { label: 'Very Good: 740 to 799', value: 'Very Good: 740 to 799' },
      { label: 'Good: 670 to 739', value: 'Good: 670 to 739' },
      { label: 'Fair: 580 to 669', value: 'Fair: 580 to 669' },
      { label: 'Poor: 579 and below', value: 'Poor: 579 and below' },
    ],
  },
  {
    questionType: 'radio',
    question: 'Do you have a credit score by Vantage?',
    answers: [
      {
        label: 'Excellent: 781 to 850',
        value: 'Excellent: 781 to 850',
      },
      { label: 'Good: 661 to 780', value: 'Good: 661 to 780' },
      { label: 'Fair: 601 to 660', value: 'Fair: 601 to 660' },
      { label: 'Poor: 500 to 600', value: 'Poor: 500 to 600' },
      { label: 'Very Poor: 300 to 499', value: 'Very Poor: 300 to 499' },
    ],
  },
  {
    questionType: 'input',
    question: 'How much capital do you require to grow your business?',
    placeholder: ' Enter amount...',
  },
]
