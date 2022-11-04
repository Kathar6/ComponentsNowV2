import { useState, useEffect } from "react"

// Components
import Badge from "@src/components/Badge"
import Rating from "@src/components/Rating"
import Input from "@src/components/Input"

// Vendor
import {
  Text,
  Flex,
  useTheme
} from "@chakra-ui/react"

// Types
type Props = {}

const MainInfo = (props: Props) => {
  const theme = useTheme()

  return (
    <Flex direction='column'>
        <Text className="product-title">
          GTX 1650
        </Text>
        <Flex gap={4}>
          <Text className="product-price">
            199$
          </Text>
          <Text className="product-discount">
            240$
          </Text>
        </Flex>
        <Flex gap={3}>
          <Badge>
            50% OFF
          </Badge>
          <Badge>
            FREE SHIPPING
          </Badge>
        </Flex>
        <Rating mt="5" value={1} total={10}/>
        <Input type='number' min={0}/>
    </Flex>
  )
}

export default MainInfo