
import { lazy } from 'react';

import defaultRoutes from './list'
import auth from './list/auth'

// Types
import type { RouteObject } from "react-router-dom";

// Components
const routes: Array<RouteObject> = [
  ...defaultRoutes,
  ...auth
]

export default routes