import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

test('App should have a title with hola as text', async () => {
  render(
    <Router>
      <App/>
    </Router>
  )
})