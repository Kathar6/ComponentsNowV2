

import Container from "./Container"

type Props = {
  children: JSX.Element
}

const Blank = (props: Props) => {
  const {
    children
  } = props

  return (
    <Container>
      {children}
    </Container>
  )
}

export default Blank