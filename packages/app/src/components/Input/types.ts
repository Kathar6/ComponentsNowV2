import { HTMLInputTypeAttribute } from "react"

export interface IInputTypes {
  [key: string] : (props?: any) => JSX.Element
}

export interface IInputProps {
  label: string,
  type: HTMLInputTypeAttribute
}