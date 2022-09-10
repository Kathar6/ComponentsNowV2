
// Components
import Blank from "./Blank"
import Menu from "./Menu"

type LayoutDict = {
  blank: JSX.Element,
  menu: JSX.Element
}

type Props = {
  type: "blank" | "menu",
  children?: JSX.Element
}

const Layout = (props: Props) => {
  const {
    type,
    children
  } = props

  const layoutHandler: LayoutDict = {
    blank: <Blank>{children || <div></div>}</Blank>,
    menu: <Menu/>
  }

  return layoutHandler[type]
}

export default Layout