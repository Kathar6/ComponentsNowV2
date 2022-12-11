import { ClassAttributes, InputHTMLAttributes, useMemo } from 'react'

// Vendor
import { FieldHookConfig, useField } from 'formik'
import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react'

// Types
export type FormInputProps = {
  label?: string,
  getInput: (props?: any) => JSX.Element,
  props: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>
}

const FormInput = ({getInput, props, label}: FormInputProps) => {

  const [field, meta] = useField(props)

  const id = useMemo(() => `${props.id ? `${props.id}-` : ""}${props.name}`, [])

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={id} fontSize="1rem">{label ?? ''}</FormLabel>
        {getInput({...field})}
      <FormErrorMessage maxW="inherit">{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default FormInput