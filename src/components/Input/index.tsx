import { useMemo } from 'react'

// Components
import Input from './Input'
import Password from './Password'

// Vendor
import { useField } from 'formik'

import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react'

// Types
import type { FC } from 'react'
import type { FieldHookConfig } from 'formik'

type CurrentType = "text" | "password"

type CustomProps = {
  label: string,
  type: CurrentType
}

interface InputType {
  text: JSX.Element,
  password: JSX.Element
}
// {label, type, ...props}
const CustomInput: FC<FieldHookConfig<string> & CustomProps> = ({label, type, ...props}) => {
  const currentType: CurrentType = type || "text"

  const [field, meta] = useField(props)

  const id = useMemo(() => `${props.id ? `${props.id}-` : ""}${props.name}`, [])

  const inputTypeHandler: InputType = {
    text: <Input id={id} {...field} />,
    password: <Password id={id} {...field} />
  }
  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={id} fontSize="1rem">{label}</FormLabel>
      {inputTypeHandler[currentType]}
      <FormErrorMessage maxW="inherit">{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default CustomInput