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

// `questionType` radio can have extra property name `additionalData` to display input for more details


export const quiz = [
  {
    progress: 1,
    name: 'About yourself',
    questions: [
      {
        questionType: 'input',
        question: 'Please enter email',
        placeholder: 'name@example.com',
        required: 'Email is required',
        points: 1,
      },
      {
        questionType: 'input',
        question: 'Age',
        placeholder: 'Age',
        required: 'Age is required',
        points: 2
      },
      {
        questionType: 'textarea',
        question:
          'Describe your content creation business in 100 words or less',
        placeholder: 'Type your answer here',
        points: 3
      },
      {
        questionType: 'checkbox',
        question:
          'Please pick the topics which best describes your content (max 3)',
        answers: [
          { label: 'Sports', value: 'Sports', points: 4 },
          { label: 'Fashion', value: 'Fashion', points: 5 },
          { label: 'Fitness', value: 'Fitness', points: 6 },
          { label: 'Travel', value: 'Travel', points: 7 },
          { label: 'News', value: 'News', points: 8 },
          { label: 'Podcast', value: 'Podcast', points: 9 },
          { label: 'Comedy', value: 'Comedy', points: 10 },
          { label: 'Gaming', value: 'Gaming', points: 11 },
          { label: 'Streaming', value: 'Streaming', points: 12 },
          { label: 'Independent Media', value: 'Independent Media', points: 13 },
          { label: 'Entertainment', value: 'Entertainment', points: 14 },
          { label: 'Wellness', value: 'Wellness' , points: 15},
          { label: 'Anime', value: 'Anime' , points: 16},
          { label: 'History', value: 'History', points: 17 },
        ],
      },
    ],
  },
  {
    progress: 2,
    name: 'About your content',
    questions: [
      {
        questionType: 'radio',
        question: 'What is your primary revenue generating Content Platform',
        answers: [
          { label: 'Youtube', value: 'Youtube', points: 1 },
          { label: 'Tiktok', value: 'Tiktok', points: 1 },
          { label: 'Instagram', value: 'Instagram', points: 1 },
          { label: 'Twitch', value: 'Twitch', points: 1 },
          { label: 'Substack', value: 'Substack', points: 1 },
          { label: 'Other', value: 'Other', additionalData: true, points: 1 },
        ],
      },
      {
        questionType: 'input',
        question:
          'Please provide the link to your highest revenue generating channel',
        placeholder: 'https://www.example.com/channel',
        points: 1,
      },
      {
        questionType: 'radio',
        question: 'How many years have you been generating content?',
        answers: [
          { label: 'Drop down', value: 'Drop down', points: 1 },
          { label: '1 - 20 years', value: '1 - 20 years', points: 1 },
          { label: 'less than 1 year', value: 'less than 1 year', points: 1 },
        ],
        required: 'Please select at least one option',
      },
      {
        questionType: 'input',
        question:
          'How many years have you been creating content full time as your primary source of revenue?',
        placeholder: ' Number of Years',
        points: 1,
      },
      {
        questionType: 'radio',
        question:
          'Please provide a range of revenue from your primary content platfrom listed above',
        answers: [
          { label: '0 - 100,000', value: '0 - 100,000', points: 1 },
          { label: '100,000 - 250,000', value: '100,000 - 250,000', points: 1 },
          { label: '250,000 - 500,000', value: '250,000 - 500,000', points: 1 },
          { label: '500,000 - 750,000', value: '500,000 - 750,000', points: 1 },
          { label: '750,000 - 1,000,000', value: '750,000 - 1,000,000', points: 1 },
          { label: '1,000,000 - 1,500,000', value: '1,000,000 - 1,500,000', points: 1 },
          { label: '1,500,000 - 2,000,000', value: '1,500,000 - 2,000,000', points: 1 },
          { label: '2,000,000 - 2,500,000', value: '2,000,000 - 2,500,000', points: 1 },
          { label: '2,500,000 +', value: '2,500,000 +' , points: 1},
        ],
      },
    ],
  },
  {
    progress: 3,
    name: 'About your revenue',
    questions: [
      {
        questionType: 'radio',
        question:
          'If any, what subscription platform do you use to help grow your business?',
        answers: [
          { label: 'Buy me a coffee', value: 'Buy me a coffee', points: 1 },
          { label: 'Ko-FI', value: 'Ko-FI', points: 1 },
          { label: 'patreon', value: 'patreon' , points: 1},
          { label: 'memberful', value: 'memberful', points: 1 },
          { label: 'do not use one', value: 'do not use one', points: 1 },
          { label: 'other', value: 'other', additionalData: true , points: 1},
        ],
      },
      {
        questionType: 'input',
        question:
          'If yes, What is your monthly payments from a subscription platform you use to grow your business?',
        placeholder: ' Monthly Payment Amount (USD)',
        points: 1,
      },
      {
        questionType: 'radio',
        question: 'Have you sought investment in your businesses?',
        answers: [
          { label: 'yes', value: 'yes' , points: 1},
          { label: 'no', value: 'no' , points: 1},
        ],
      },
      {
        questionType: 'input',
        question: 'If yes, what service providers have you used?',
        placeholder: ' Service Providers Used',
        points: 1,
      },
      {
        questionType: 'textarea',
        question:
          'What are the main problems in 100 words or less for receiving funding for your business?',
        placeholder: 'Type your answer here',
        points: 1,
      },
      {
        questionType: 'radio',
        question:
          'have you sold a stake in your highest revenue generating channel listed above?',
        answers: [
          { label: 'no', value: 'no' , points: 1},
          {
            label: 'yes, what is the percentage?',
            value: 'yes',
            additionalData: true,
            points: 1
          },
        ],
      },
      {
        questionType: 'textarea',
        question:
          'if no, what have been the main reasons for not  - 100 words or less',
        placeholder: ' Why Not?',
        points: 1,
      },
      {
        questionType: 'radio',
        question: 'Do you have a team of full time staff?',
        answers: [
          { label: 'yes', value: 'yes', points: 1 },
          { label: 'no', value: 'no' , points: 1},
          { label: 'other', value: 'other' , points: 1},
        ],
      },
    ],
  },
  {
    progress: 4,
    name: 'About your credit score',
    questions: [
      {
        questionType: 'checkbox',
        question: 'Do you use any of the below monetization platforms?',
        answers: [
          { label: 'Floatplane', value: 'Floatplane' , points: 1},
          { label: 'Substack', value: 'Substack' , points: 1},
          { label: 'Podia', value: 'Podia' , points: 1},
          { label: 'ThinkIFC', value: 'ThinkIFC' , points: 1},
          { label: 'Gum Road', value: 'Gum Road' , points: 1},
          { label: 'Teachable', value: 'Teachable' , points: 1},
          { label: 'other', value: 'other' , points: 1},
        ],
      },
      {
        questionType: 'radio',
        question: 'Do you have a credit score by Ficore?',
        answers: [
          {
            label: 'Exceptional: 800 and above',
            value: 'Exceptional: 800 and above',
            points: 1
          },
          { label: 'Very Good: 740 to 799', value: 'Very Good: 740 to 799' , points: 1},
          { label: 'Good: 670 to 739', value: 'Good: 670 to 739' , points: 1},
          { label: 'Fair: 580 to 669', value: 'Fair: 580 to 669' , points: 1},
          { label: 'Poor: 579 and below', value: 'Poor: 579 and below' , points: 1},
        ],
      },
      {
        questionType: 'radio',
        question: 'Do you have a credit score by Vantage?',
        answers: [
          {
            label: 'Excellent: 781 to 850',
            value: 'Excellent: 781 to 850',
            points: 1
          },
          { label: 'Good: 661 to 780', value: 'Good: 661 to 780' , points: 1},
          { label: 'Fair: 601 to 660', value: 'Fair: 601 to 660' , points: 1},
          { label: 'Poor: 500 to 600', value: 'Poor: 500 to 600' , points: 1},
          { label: 'Very Poor: 300 to 499', value: 'Very Poor: 300 to 499' , points: 1},
        ],
      },
    ],
  },
  {
    progress: 5,
    name: 'About your needs',
    questions: [
      {
        questionType: 'input',
        question: 'How much capital do you require to grow your business?',
        placeholder: ' Enter amount...',
        points: 1,
      },
    ],
  },
]
