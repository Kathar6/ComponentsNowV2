import { HTMLAttributes, useState } from "react"

// Components
import {
  List,
  Star
} from "./components"

// Styles
import "./styles.scss"

// Vendor
import { 
  Box,
  BoxProps 
} from "@chakra-ui/react"

// Types
export interface IRatingProps extends BoxProps{
  total: number
  value: number
}

const Rating = ({value, total, ...props}: IRatingProps) => {

  const averageRating = value * 100 / total
  const rating = averageRating * 5 / 100

  const [starLength, setStarLength] = useState(new Array(5).fill(''))

  const handleColor = (index: number): [string, string] => {
    if (index <= rating) return ['var(--chakra-colors-primary-500)', 'var(--chakra-colors-primary-500)']
    if ((index - 0.5) === rating) return ['var(--chakra-colors-primary-500)', '#D9D9D9']
    return ['#D9D9D9', '#D9D9D9']
  }

  return (
    <Box display='flex'
      alignItems='center'
      gap={2}
      {...props}>
      <List>
        {starLength.map((item, index) => {
          const currentColor = handleColor(index + 1)    
          return <Star key={index} colors={currentColor}/>
        })}
      </List>
      <span className="rating-amount" color="#C8C8C8">({total})</span>
    </Box>
  )
}

export default Rating