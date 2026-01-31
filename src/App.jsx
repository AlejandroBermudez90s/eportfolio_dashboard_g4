import './App.css'
import Cabecera from './componentes/Cabecera.jsx'
import Roles from './componentes/Roles.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import TokenContext from './componentes/TokenContext.jsx'

function App() {

  const usuario = 'Alejandro'
  const token = 'abc123xyz456'
  const menu = 'Principal'

  return (
    <TokenContext.Provider value = {token}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Cabecera usuario={usuario}></Cabecera>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Roles></Roles>
          </div>
          <div className='col-8'>
            <Dashboard menu={menu}></Dashboard>
          </div>
        </div>
      </div>
    </TokenContext.Provider>
  )

}

export default App;
