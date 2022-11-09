
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'

// Theme
import theme from "@src/theme"

// Styles
import "./styles.css"

const container = document.getElementById('app')!
const root = createRoot(container)
root.render(
  <ChakraProvider theme={theme}>
    <Suspense fallback={<div></div>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </ChakraProvider>
)