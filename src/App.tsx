import React from 'react'
import Home from './pages/Home'
import { CSSReset } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Home />
    </ChakraProvider>
  )
}

export default App
