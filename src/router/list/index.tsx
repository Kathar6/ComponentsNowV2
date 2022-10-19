import { lazy } from "react"

// Types
import type { RouteObject } from "react-router-dom";

// Routes
const Home = lazy(() => import("@views/Home"))
const Layout = lazy(() => import("@src/components/Layout"))

// Route Files
import products from "./Products"

const childRoutes: Array<RouteObject> = [
  {
    path: '',
    element: <Home/>
  },
  ...products
]

const defaultRoutes: Array<RouteObject> = [
  {
    path: '',
    element: <Layout type="menu"/>,
    children: childRoutes
  }
];

export default defaultRoutes;