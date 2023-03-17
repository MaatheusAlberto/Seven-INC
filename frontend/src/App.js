import { 
  BrowserRouter as Router,
  Switch, 
  Route 
} from "react-router-dom";

import TemplateDefault from './templates/Defaults'
import Home from "./pages/Home";
import Employees from "./pages/Employees";


const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/employees">
            <Employees/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
}

export default App
