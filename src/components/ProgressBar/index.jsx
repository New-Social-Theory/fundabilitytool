import {ProgressText, ProgressBarContainer, Filler, Wrapper, ProgressBarContent, Background } from "./style"

const ProgressBar = ({ step }) => {
    const fillerWidth = `${(step / 5) * 100}%`;
    return (
        <Wrapper>
            <ProgressBarContainer>
                <ProgressBarContent>
                    <ProgressText>PROGRESS ({step}/5)</ProgressText>
                    <Background>
                        <Filler width={fillerWidth} />
                    </Background>
                </ProgressBarContent>
            </ProgressBarContainer>
        </Wrapper>
    );
  }
  
  export default ProgressBar;