import { lazy } from "react";

// Types
import type { RouteObject } from "react-router-dom";

// Component
const ProductPage = lazy(() => import("@src/views/Product"));

const Routes:Array<RouteObject> = [
  {
    path: 'product/:id',
    element: <ProductPage/>
  }
];

export default Routes