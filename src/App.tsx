import { useRoutes } from 'react-router-dom';

// Components
import routes from '@src/router';

// Styles
import "@src/Assets/scss/index.scss"

const App = () => {
  const Router = useRoutes(routes);
  return Router;
}

export default App