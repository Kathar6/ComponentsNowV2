import styled from 'styled-components'

import {Input} from '@chakra-ui/react'

// Types
import { FieldHookConfig } from 'formik'
import { IInputProps } from './types'
import { InputHTMLAttributes } from 'react'

const StyledInput = styled(Input)<InputHTMLAttributes<HTMLInputElement>>`
  padding: 0.625rem 0.313rem;
  min-height: fit-content;
  height: fit-content !important;
`

export default StyledInput