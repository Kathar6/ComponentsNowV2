import { useState } from "react"


// Components
import {Container, Input, Button} from "./components"

// Types
import {IInputNumberProps} from "./types"

const Number = ({step = 1, ...props}: IInputNumberProps) => {

  const [value, setValue] = useState<string>("")

  const handleDisabled = (type: 0|1) => {
    if (!value) return ''
    if (type === 0) {
      if (props.min === undefined) return ''
      if (value <= props.min) {
        return 'disabled'
      }
      return ''
    }
    if (props.max === undefined) return ''
    if (value >= props.max) {
      return 'disabled'
    }
    return ''
  }

  const setValueByButton = (increment: number) => {
    const newValue = parseInt(value) + increment
    if (props.min !== undefined && newValue < props.min) return
    if (props.max !== undefined && newValue > props.max) return
    setValue(`${newValue}`)
  }

  return (
    <Container>
      <Button className={handleDisabled(0)} onClick={() => setValueByButton(-step)}>
        &#65293;
      </Button>
      <Input type='number' {...props} 
      value={value} 
      onChange={(e: any) => {
        setValue(e.target.value)
        if (props.onChange) props?.onChange(e.target.value)
      }}/>
      <Button className={handleDisabled(1)} onClick={() => setValueByButton(step)}>
        &#65291;
      </Button>
    </Container>
  )
}

export default Number