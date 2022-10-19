import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme(
  {
    colors: {
      gray: {
        700: '#464555'
      },
      primary: {
        50: "#C3CFFF",
        100: "#C3CFFF",
        200: "#C3CFFF",
        300: "#88A2D8",
        400: "#396EDB",
        500: "#105AEF",
        600: "#1B4498",
        main: "#105AEF"
      }
    },
    fonts: {
      heading: `'Raleway', sans-serif`,
      body: `'Raleway', sans-serif`
    },
    styles: {
      global: props => ({
        body: {
          bg: mode("#fafafa", "#020517")(props)
        }
      })
    },
  },
  withDefaultColorScheme({
    colorScheme: 'primary'
  }),
)
export default theme