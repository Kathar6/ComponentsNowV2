// Components
import {
  Container
} from "./components"

type Props = {
  children: string | JSX.Element
}

const Badge = ({
  children
}: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Badge