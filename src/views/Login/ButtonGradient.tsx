import styled from 'styled-components'

import {
  Button
} from '@chakra-ui/react'

const ButtonGradient = styled(Button)`
  background: linear-gradient(180deg, #105AEF 0%, #5175FF 50%, #7A92FF 100%) !important;
  box-shadow: 0px 4px 4px #00000025;
  font-size: 1.25rem;
  width: 100%;
  min-height: 3.125rem;
  padding:0.75rem 0.4rem;
`

export default ButtonGradient