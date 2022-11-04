import { InputHTMLAttributes } from "react";

export interface IInputNumberProps extends InputHTMLAttributes<HTMLInputElement>{
  step: number
}