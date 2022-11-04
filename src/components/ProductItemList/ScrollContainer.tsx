import {useMemo} from "react"

// Components
import { 
  CircleButton
} from "./components"

// Vendor
import { Icon } from "@iconify/react"
import {
  Box
} from "@chakra-ui/react"

type Direction = 'left'|'right'

type Props = {
  direction: Direction,
  overflow: Boolean,
  onClick?: (direction: Direction) => any,
}

const ScrollContainer = ({
  overflow = false,
  direction,
  onClick,
  ...props
}: Props) => {

  const icon = useMemo(() => ({
    'left': <Icon icon="eva:arrow-ios-back-fill"/>,
    'right': <Icon icon="eva:arrow-ios-forward-fill"/>
  }), [direction])

  return (
    <Box
      display={overflow ? "flex" : "none"}
      justifyContent="center"
      alignItems="center"
      fontSize="2xl">
      {overflow && 
        <CircleButton 
        onClick={(e) => {
          if (onClick) onClick(direction)
        }}>
          {icon[direction]}
        </CircleButton>
      }
    </Box>
  )
}

export default ScrollContainer