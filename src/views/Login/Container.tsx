
import styled from "styled-components"

// Vendor
import {
  Box
} from '@chakra-ui/react'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 471px;
  max-width: min-content;
  min-height: max-content;
  max-height: 900px;

  @media screen and (max-width: 768px) {
    min-width: auto;
  }

  & div[role="group"], button[type="submit"] {
    margin-top: 1rem;
  }
`

export default Container