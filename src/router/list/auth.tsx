import { lazy } from "react"

// Pages
const Login = lazy(() => import('@views/Login'))
const NotFound = lazy(() => import("@views/NotFound"))
const Layout = lazy(() => import("@src/components/Layout"))

// Vendor
import { Navigate } from "react-router-dom";

// Utils
const checkAuth = () => {
  const expiration = localStorage.getItem("exp-time")
  console.log(expiration)
  if (expiration) return "/home"
  else return "/login"
}

export default [
  {
    path: '',
    element: <Layout type="blank"/>,
    children: [
      {
        path: '*',
        element: <NotFound />
      },
      {
        path:"login",
        element: <Login />
      }
    ]
  },
  {
    path: '/home',
    element: <Navigate to="/" />
  }
]