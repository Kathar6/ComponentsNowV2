
// Components
import { Card } from "./components"

// Assets
import DefaultImage from "@src/Assets/imgs/default_image.png"

// Vendor
import {
  Box,
  Text,
  Image,
  useTheme
} from "@chakra-ui/react"

type Props = {
  image?: string
  previousValue?: number
  value?: number
  discount?: number
  description?: string | JSX.Element
}

const CardItem = ({
  image,
  value,
  discount,
  description,
  previousValue
}: Props): JSX.Element => {

  const theme = useTheme()

  return (
    <Box className="card-wrapper">  
      <Card>
        <Image alt="CardList Image" src={image || DefaultImage}/>

        <Text className="card-previous-value">
          {previousValue}
          {previousValue && '$'}
        </Text>

        <Box 
        display="flex"
        flexDirection="row"
        fontSize="xl">
          <Text
          fontSize="2xl">
            {value ?? "N/A"}
            {value && '$'}
          </Text>

          <Text 
            ms="2" 
            fontSize="md"
            color={theme.colors.primary.main}>
              {discount}
              {discount && "% OFF"}
            </Text>
        </Box>

        <Box
          color={theme.colors.gray['500']}>
          {description}
        </Box>
      </Card>
    </Box>
  )
}

export default CardItem