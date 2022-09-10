import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { Formik, Form } from "formik"

// Assets
import logo from "@src/Assets/imgs/Logo.png"
import google from "@src/Assets/imgs/icons/google-icon.png"
import facebook from "@src/Assets/imgs/icons/facebook-logo.png"

// Hooks
import useValidations from "@src/hooks/useValidations"

// Components
import Layout from "@src/components/Layout"
import CustomInput from "@src/components/Input"
import ButtonGradient from "./ButtonGradient"

// Vendor
import Container from "./Container"
import {
  Box,
  Text,
  Link,
  Image
} from '@chakra-ui/react'

const initialValues = {
  name: "",
  password: ""
}

type formValues = {
  [key: string]: string|boolean
}

type checkValues = {
  [key: string]: string
}

const Login = (): JSX.Element | null => {
  const navigate = useNavigate()
  const validate = useValidations({
    name: ["required", "range"],
    password: ["required", "password"]
  })

  const checkValues = (values: checkValues) => {
    const errors: formValues = {}
    const checkName = validate("name", values.name)
    const checkPassword = validate("password", values.password)
    if (checkName !== true) errors.name = checkName
    if (checkPassword !== true) errors.password = checkPassword
    return errors
  }

  const onSubmit = (data: any) => {
    navigate("/home")
  }

  return (
    <Layout type="blank">
      <Container>
        <Image src={logo} w="fit-content" h="5.625rem" alt="Components Logo"/>
        <Text title="page-title" fontSize="2rem">Components Now</Text>
        <Box w="100%">
          <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={checkValues}
            >
            <Form>
              <CustomInput name="name" label="Username" type="text" />
              <CustomInput name="password" label="Password" type="password" />
              <ButtonGradient 
                variant="solid" 
                type="submit">
                Log in
              </ButtonGradient>
            </Form>
          </Formik>
          <Box mt="1rem" fontSize="0.875rem" fontWeight="bold">
            Don't have an account? <Link color="var(--chakra-colors-primary-500)" onClick={() => navigate("/register")}>Register a new account</Link>
          </Box>
          <Box mt="1.875rem" display="flex" gap="1.25rem" justifyContent="center" alignItems="center">
            <Image src={google} w="3rem" h="3rem"/>
            <Image src={facebook} w="3rem" h="3rem"/>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Login