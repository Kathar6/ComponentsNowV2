import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../index'

test('App should have a title with Components Now as text', async () => {
  render(
    <Router>
      <Login/>
    </Router>
  )
  const title = await screen.findByTitle("page-title")
  
  expect(title.innerHTML).toBe("Components Now")
})