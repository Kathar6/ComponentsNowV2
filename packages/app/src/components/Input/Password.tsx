import { InputHTMLAttributes, useMemo, useState } from "react"

// Assets
import { Icon } from "@iconify/react"

// Components
import Input from "./Input"

// Vendor
import {
  InputGroup,
  InputRightAddon
} from "@chakra-ui/react"

const Password = (props: InputHTMLAttributes<HTMLInputElement>) => {

  const [show, setShow] = useState(false)
  
  const inputProps = useMemo(() => ({
    ...props,
    type: undefined
  }), [show])

  return (
    <InputGroup>
      <Input {...props} type={show ? 'text' : 'password'} />
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