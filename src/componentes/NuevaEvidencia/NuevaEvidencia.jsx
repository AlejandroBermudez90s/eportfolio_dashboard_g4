import "./Evidencias.css"
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
import { useState } from "react"

const NuevaEvidencia = () => {

    function verTareas(tarea) {
        return <li key={tarea.id}>{tarea.observaciones}</li>
    }

    const [listaTareas, setListaTareas] = useState([])

    return (
        <div className="centro">
            <p>Tarea Seleccionada: {listaTareas.map(verTareas)}</p>
            <SelectorTareaRA listaTareas={listaTareas} setListaTareas={setListaTareas} verTareas={verTareas}></SelectorTareaRA>
            <NuevaEvidenciaForm></NuevaEvidenciaForm>
        </div>
    )
}

export default NuevaEvidencia