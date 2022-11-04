import { Fragment, useState ,useEffect, createRef } from "react"

// Hooks

// Components
import { 
  CardList
} from "./components"
import ScrollContainer from "./ScrollContainer"

type Props = {
  children?: JSX.Element | JSX.Element[]
}

const List = (props: Props) => {  

  const [overflow, setOverflow] = useState(false)
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    if (ref.current) {
      if (ref.current?.scrollWidth > ref.current?.clientWidth) setOverflow(true)
    }
  }, [ref])

  return (
    <Fragment>
      <ScrollContainer 
      overflow={overflow} 
      direction="left"
      onClick={(direction) => {
        if (overflow && Array.isArray(props.children)) {
          ref.current?.scroll({
            left: ref.current?.scrollLeft - 1120,
            behavior: 'smooth'
          })
        }
      }}/>
      <CardList ref={ref} className={Array.isArray(props.children) && props.children.length > 6 ? "overflow" : ""}>
        {Array.isArray(props.children) 
          ? (
            props.children.map((children, index) => {
              return (
                <Fragment key={`card-list-${index}`}>
                  {children}
                </Fragment>
              )
            })
          ) : (
            <Fragment>{props.children}</Fragment>
          )
        }
      </CardList>
      <ScrollContainer 
      overflow={overflow} 
      direction="right"
      onClick={(direction) => {
        if (overflow && Array.isArray(props.children)) {
          ref.current?.scroll({
            left: ref.current?.scrollLeft + 1120,
            behavior: 'smooth'
          })
        }
      }}/>
    </Fragment>
  )
}

export default List