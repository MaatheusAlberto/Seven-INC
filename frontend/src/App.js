import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import TemplateDefault from './templates/Defaults'
import TemplatePage from '../src/templates/Page'
import Home from "./pages/Home"
import EmployeesList from "./pages/EmployeesList"
import EmployeeRegister from "./pages/EmployeeRegister"
import EmployeeEdit from "./pages/EmployeeEdit"

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path="/employees/editar/:id" element={<TemplatePage title="Editar funcionario" Component={EmployeeEdit} />} />
          <Route path="/employees/cadastro" element={<TemplatePage title="Cadastro de funcionarios" Component={EmployeeRegister} />} />
          <Route path="/employees" element={<TemplatePage title="Lista de funcionarios" Component={EmployeesList} />} />
          <Route path="/" element={<TemplatePage title="Página inicial" Component={Home} />} />
        </Routes>
      </TemplateDefault>
    </Router>
  );
}

export default App
