import { lazy } from "react"

const Login = lazy(() => import('@views/Login'))
const NotFound = lazy(() => import("@views/NotFound"))

// Vendor
import { Navigate } from "react-router-dom";

// Utils
const checkAuth = () => {
  const expiration = localStorage.getItem("exp-time")
  if (expiration) return "/home"
  else return "/login"
}
export default [
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Navigate to={checkAuth()} />
  },
  {
    path: 'login',
    element: <Login />
  }
]