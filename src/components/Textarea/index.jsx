import { Wrapper, Label, TextareaContainer } from "./style"

const Textarea = ({ name, placeholder, register, stateName, ...props }) =>{
    return (
    <Wrapper>
        <Label>{name}</Label>
        <TextareaContainer {...register(stateName)}  placeholder={placeholder} required {...props}/>
    </Wrapper>
    )
}

export default Textarea