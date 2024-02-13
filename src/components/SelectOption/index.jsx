import { Wrapper, Label } from './style'

const SelectOption = ({ name , items}) => {
    const renderItems = () => {
       
       <select>
        {items.map((item)=>{
            return <option key={item}>{item}</option> 
        })}
       </select>
      }
      
    return <Wrapper>
        <Label>{name}</Label>
        {renderItems()}
    </Wrapper>
}

export default SelectOption