import { ClassAttributes, Fragment, HTMLInputTypeAttribute, InputHTMLAttributes, useMemo } from 'react'

// Components
import Input from './Input'
import Password from './Password'
import Number from "./Number"
import FormInput from './FormInput'

// Types
import { IInputTypes } from "./types"

// {label, type, ...props}
const CustomInput = (props: InputHTMLAttributes<HTMLInputElement> & any) => {
  const currentType: HTMLInputTypeAttribute = props?.type || "text"

  const inputTypeHandler: IInputTypes = {
    text: (field: any) => <Input {...field} {...props} />,
    password: (field: any) => <Password {...field} {...props} />,
    number: (field: any) => <Number {...field} {...props} />
  }
  
  if (props.name) {
    return <FormInput label={props.label} props={props} getInput={inputTypeHandler[currentType as keyof IInputTypes]}/>
  }

  return (
    <Fragment>
      {inputTypeHandler[currentType as keyof IInputTypes]()}
    </Fragment>
  )
}

export default CustomInput