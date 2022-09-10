

// Components
import Container from "./Container"
import Tip from "./Tip"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const TipList = (props: Props) => {
  return (
    <Container>
      {Array.isArray(props.children) 
        ? (
          props.children.map((children, index) => {
            return (
              <Tip key={`tip-${index}`}>{children}</Tip>
            )
          })
        ) : (
          <Tip>{props.children}</Tip>
        )
      }
    </Container>
  )
}

export default TipList