import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('App should have a title with hola as text', () => {
  const {getByText} = render(<App/>)
  const title = getByText('Pruebaaaa')

  expect(title).toBeInTheDocument('Pruebaaaa')
})