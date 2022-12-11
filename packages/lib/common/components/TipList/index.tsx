import { useState } from "react"

// Components
import Container from "./Container"
import Tip from "./Tip"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const TipList = (props: Props) => {
  const [childrenHover, setChildrenHover] = useState(-1)

  return (
    <Container data-testid="tip-list">
      {Array.isArray(props.children) 
        ? (
          props.children.map((children, index) => {
            return (
              <Tip key={`tip-${index}`}
              onMouseOver={() => setChildrenHover(index)}
              onMouseOut={() => setChildrenHover(-1)}
              >
                {children}
                {childrenHover === index && children.props['data-text'] && <span>{children.props['data-text']}</span>}
              </Tip>
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