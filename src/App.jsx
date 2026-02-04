import './App.css'
import Cabecera from './componentes/Cabecera.jsx'
import Roles from './componentes/Roles.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import TokenContext from './componentes/TokenContext.jsx'
import { useState } from 'react'
import UserContext from './componentes/UserContext.jsx'

function App() {

  const usuario = 'Alejandro'
  const token = 'abc123xyz456'
  const menu = 'Principal'

  return (
    <TokenContext.Provider value={token}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Cabecera usuario={usuario}></Cabecera>
          </div>
        </div>

        <UserContext.Provider value={usuario}>
        <div className='row'>
          <div className='col-4'>
            <Roles></Roles>
          </div>
          <div className='col-8'>
            <Dashboard menu={menu}></Dashboard>
          </div>
        </div>
        </UserContext.Provider>

      </div>
    </TokenContext.Provider>
  )

}

export default App
