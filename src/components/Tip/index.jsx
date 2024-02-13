import { Wrapper, Title, Description, Container } from "./style"

const Tip =({title, description})=>{
    return (
    <Wrapper>
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    </Wrapper>
    )
}

export default Tip