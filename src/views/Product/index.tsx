import { useState, useEffect } from "react"

// Assets
import defaultImage from "@src/Assets/imgs/default_image.png"

// Components
import MainInfo from "./MainInfo"
import ProductCarousel from "@src/components/ProductCarousel"
import Card from "@src/components/Card"

// Assets
import componentImage from "@src/Assets/imgs/component.png"

// Styles
import "./styles.scss"

// Vendor
import {
  Box,
  Flex
} from "@chakra-ui/react"

const ProductPage = (): JSX.Element => {

  const [images, setImages] = useState(() => {
    const imagesToArray = new Array(10)
    return imagesToArray.fill(componentImage)
  })

  return (
    <Box
      mx="6rem"
      my="5.625rem">
      <Flex className="product-main-block" gap={10} wrap='wrap-reverse'>
        <Box maxW="60%">
          <ProductCarousel images={images}/>
        </Box>
        <MainInfo/>
      </Flex>

      <Flex gap={28}>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam delectus, culpa cumque sint, excepturi praesentium, minus quaerat nihil aliquam voluptatibus corrupti earum. Accusamus aliquid, eveniet iure ipsam facilis sapiente?
        </Card>
        <Flex w="20rem" direction='column'>
          <Card>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi nihil recusandae ratione error atque quas. Adipisci, recusandae aspernatur labore laborum reprehenderit odit dolorum, similique odio hic illum temporibus fugiat!
          </Card>
          <Card>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi nihil recusandae ratione error atque quas. Adipisci, recusandae aspernatur labore laborum reprehenderit odit dolorum, similique odio hic illum temporibus fugiat!
          </Card>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductPage