type Props = {}

// Vendor
import { Icon } from "@iconify/react"
import {
  Box,
  Text,
  useTheme
} from "@chakra-ui/react"

const Footer = (props: Props): JSX.Element => {

  const theme = useTheme()

  return (
    <Box
      w="100%"
      h="17vh"
      p="1rem"
      mt="1rem"
      color="white"
      display="flex"
      fontSize="sm"
      alignItems="center"
      flexDirection="column"
      bg={theme.colors.primary['500']}>
      <Text>Components Now</Text>
      <Text>Kathar6</Text>
      <Box
        mt=".6rem"
        display="flex"
        fontSize="1.6rem"
        flexDirection="row">
        <a href="https://github.com/Kathar6" target="_blank">
          <Icon icon="akar-icons:github-fill"/>
        </a>
      </Box>
    </Box>  
  )
}

export default Footer