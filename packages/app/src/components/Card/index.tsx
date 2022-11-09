import { HTMLAttributes } from "react"
import styled from "styled-components"

const Card = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  width: 100%;
  height: auto;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #EFEFEF;
  border-radius: 0.313rem;
  box-shadow: 0px 5px 5px 1px #c8c8c8;
`

export default Card