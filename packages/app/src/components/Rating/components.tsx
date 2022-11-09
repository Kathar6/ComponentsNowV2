import styled from "styled-components"
import { Box, BoxProps } from "@chakra-ui/react"

export interface IStar {
  colors: [string, string]
}

export const Star = ({colors = ["#D9D9D9", "#D9D9D9"]}: IStar): JSX.Element => (
  <svg viewBox="0 0 100 100" fill="none">
    <path vectorEffect="non-scaling-stroke" d="M50 0 L30 35 L0 50 L30 65 L50 100 Z" fill={colors[0]} stroke={colors[0]} strokeWidth="1"/>
    <path vectorEffect="non-scaling-stroke" d="M50 0 L70 35 L100 50 L70 65 L50 100 Z" fill={colors[1]} stroke={colors[1]} strokeWidth="1"/>
  </svg>  
)

export const List = styled(Box)<BoxProps>`
  display: flex;
  position: relative;
  height: 2.172rem;
  flex-direction: row;
  gap: 5px;
  z-index: 0;

  svg {
    z-index: 10;
  }
`