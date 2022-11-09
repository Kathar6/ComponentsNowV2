import { useState, useEffect } from "react"

type validationOptions = "required" | "email" | "range" | "password"

type Props = {
  [name: string]: validationOptions[]
}

const useValidations = (props: Props) => {

  const validations = {
    required: (name: string, value: string) => {
      if (!value) return `The ${name} must be required`
      return true
    },
    email: (name: string, value: string) => {
      const validateEmail = new RegExp(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/, "gi")
      if (!validateEmail.test(value)) return "Invalid email address"
      return true
    },
    range: (name: string, value: string, min: number = 2, max: number = 50) => {
      if (value.length < min) return `The ${name} must be at least ${min} characters`
      if (value.length > max) return `The ${name} must be less than ${max} characters`
      return true
    },
    password: (name: string, value: string) => {
      const validatePassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "g")
      if (!validatePassword.test(value)) return "The password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number and one special character"
      return true
    }
  }

  const validate = (name: string, value: string, min?: number, max?: number) => {
    const validationsType = props[name]
    let hasAnyError: string|boolean = false
    validationsType.forEach((type) => {
      const validate = validations[type]
      const error = validate(name, value, min, max)
      if (!hasAnyError || (hasAnyError === true && error !== true)) hasAnyError = error
    })
    return hasAnyError
  }

  return validate
}

export default useValidations