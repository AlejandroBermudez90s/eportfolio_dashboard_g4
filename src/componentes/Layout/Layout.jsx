import Roles from "../Roles/Roles"
import Dashboard from "../Dashboard/Dashboard"
import { Routes, Route } from 'react-router-dom'
import FuncionalidadEstudiante from "../FuncionalidadEstudiante/FuncionalidadEstudiante"

const Layout = (props) => {

    return (
        <div className='row'>
            <div className='col-4'>
                <Roles></Roles>
            </div>
            <div className='col-8'>
                <Routes>
                    <Route path="/" element={<Dashboard menu={props.menu} />} />
                    <Route path="/funcionalidadestuiante/:modulo" element={<FuncionalidadEstudiante />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout