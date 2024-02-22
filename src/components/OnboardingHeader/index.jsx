import ProgressBar from '../ProgressBar'
import { Title, TitleContent, TitleDescription } from './style'

const OnboardingHeader = ({ step }) => {
  return (
    <Title>
      <TitleContent>Fundability Tool</TitleContent>
      <TitleDescription>Check your fundability potential</TitleDescription>
      <ProgressBar step={step} />
    </Title>
  )
}

export default OnboardingHeader
