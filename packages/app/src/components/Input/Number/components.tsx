import { HTMLAttributes, InputHTMLAttributes } from "react"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 26px;
  width: auto;
  max-width: 200px;
`

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  max-width: 60%;
  border-radius: 20px;
  border: 2px solid var(--chakra-colors-gray-700);
  text-align: center;
  padding: 0 5px;

  &:focus {
    border-color: var(--chakra-colors-primary-500);
    box-shadow: 0 0 6px 1px #c8c8c8;
    outline: none;
  }
`

export const Button = styled.button<HTMLAttributes<HTMLButtonElement>>`
  width: 20px;
  height: 20px;
  display: flex;
  color: white;
  margin: 0 8px;
  font-size: 0.6rem;
  align-self: center;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--chakra-colors-primary-500);

  &.disabled {
    background-color: #C8C8C8;
  }
  
`