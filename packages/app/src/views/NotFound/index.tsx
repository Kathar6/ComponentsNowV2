import { useState, useEffect } from 'react'

// Router
import { useNavigate } from 'react-router-dom'

// Assets
import img404 from "@src/Assets/imgs/404.png"

// Components
import ButtonGradient from '@src/components/ButtonGradient'

// Vendor
import {
  Box,
  Text,
  Image
} from "@chakra-ui/react"

const NotFound = (): JSX.Element => {

  const navigate = useNavigate()

  return (
    <div>
      <Box 
      display="flex"
      flexDirection="column"
      alignItems="center">
        <Image alt="404 Image" title='404 Image' w="12.5rem" src={img404}/>
        <Text fontSize="8xl">Ooops!</Text>
        <Text fontSize="3xl">The component you are looking for doesn't exist.</Text>
        <ButtonGradient
        w="50%"
        mt="3rem"
        onClick={() => navigate("/home")}>
          Go Home
        </ButtonGradient>
      </Box>
    </div>
  )
}

export default NotFound