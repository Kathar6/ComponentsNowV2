
// Router
import { Outlet } from 'react-router-dom'

// Styles

// Assets
import Logo from "../../Assets/imgs/Logo.png"

// Vendor

import { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>

      <Outlet/>
    </Fragment>
  )
}

export default Navbar