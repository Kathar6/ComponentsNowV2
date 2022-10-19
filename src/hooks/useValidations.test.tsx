import '@testing-library/jest-dom'
import useValidations from './useValidations'

describe('check each validation of hook', () => {
  // Required
  test('should return error if value is empty', () => {
    const validate = useValidations({
      email: ['required', 'email']
    })
    const checkEmail = validate('email', '')
    
    expect(checkEmail).toBe('The email must be required')
  })
  // Email
  test('should return error if the email is not valid', () => {
    const validate = useValidations({
      email: ['required', 'email']
    })
    const checkEmail = validate('email', 'test')

    expect(checkEmail).toBe('Invalid email address')
  })
  test('should return true if the email is valid', () => {
    const validate = useValidations({
      email: ['required', 'email']
    })
    const checkEmail = validate('email', 'matepabon@gmail.com')

    expect(checkEmail).toBe(true)
  })
  // Range
  test('should return error if value is less than 2 characters', () => {
    const validate = useValidations({
      name: ['required', 'range']
    })
    const checkName = validate('name', 'a')

    expect(checkName).toBe('The name must be at least 2 characters')
  })
  test('should return error if value is greater than 50 characters', () => {
    const validate = useValidations({
      name: ['required', 'range']
    })
    const checkName = validate('name', 'a'.repeat(51))

    expect(checkName).toBe('The name must be less than 50 characters')
  })
  // Password
  test('should return error if password is invalid', () => {
    const validate = useValidations({
      password: ['required', 'password']
    })
    const checkPassword = validate('password', '12345')
    expect(checkPassword).toBe('The password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number and one special character')
  })
})