import { lazy } from "react"

// Types
import type { RouteObject } from "react-router-dom";

// Routes
const Home = lazy(() => import("@views/Home"))
const Layout = lazy(() => import("@src/components/Layout"))

const defaultRoutes: Array<RouteObject> = [
  {
    path: '',
    element: <Layout type="menu"/>,
    children: [{
      path: 'home',
      element: <Home/>
    }]
  }
];

export default defaultRoutes;