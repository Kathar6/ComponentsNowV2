
// Components
import Container from "./Container"

// Vendor
import { Outlet } from "react-router-dom"

type Props = {
}

const Blank = (props: Props) => {

  return (
    <Container>
      <Outlet/>
    </Container>
  )
}

export default Blank