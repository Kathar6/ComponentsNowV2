import { useState } from "react";

// Router
import { Link, Outlet, useNavigate } from "react-router-dom"

// Assets
import logo from "@src/Assets/imgs/Logo.png"

// Components
import Navbar from "./Navbar";
import Footer from "./Footer"

// Vendor
import { Icon } from "@iconify/react"
import { 
  Box,
  Avatar,
  Menu as CAMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Image
} from "@chakra-ui/react"

const Menu = () => {

  const navigate = useNavigate()

  return (
    <Box maxW="100vw">
      <Navbar>
        <Image src={logo} w="4.188rem" h="fit-content"/>

        <Box 
          minW="80%" 
          mx="0.938rem" 
          display="flex"
          alignItems="center"
          gap="0.625rem"
          justifyContent="center"
          color="white"
        >
          <Link to="/home">Home</Link>
        </Box>

        <Icon 
          icon="eva:moon-outline" 
          color="white" 
          fontSize="2rem" 
          cursor="pointer"/>
        
        <CAMenu>
          <MenuButton>
            <Avatar 
              background="#FFF"
              color="#464555"
              fontWeight="bold"
              name="John Doe"/>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate('/login')}>
            Log Out
            </MenuItem>
          </MenuList>
        </CAMenu>
      </Navbar>
      <Box>
        <Outlet/>
        <Footer/>
      </Box>
    </Box>
  )
}

export default Menu