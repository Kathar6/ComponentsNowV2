import { useState } from "react"

// Assets
import { Icon } from "@iconify/react"

// Components
import Input from "./Input"

// Vendor
import {
  InputGroup,
  InputRightAddon
} from "@chakra-ui/react"

// Types
import type { InputProps } from "@chakra-ui/react"

const Password = (props: InputProps) => {

  const [show, setShow] = useState(false)
  
  return (
    <InputGroup>
      <Input {...props} type={show ? "text" : "password"} />
      <InputRightAddon 
        py="0.625rem" 
        h="fit-content" 
        minH="2.875rem" 
        cursor="pointer" 
        children={
          <Icon icon={show ? "eva:eye-off-outline" : "eva:eye-outline"} fontSize="1.25rem"/>
        }
        onClick={() => setShow(!show)}
      />
    </InputGroup>
  )
}

export default Password