import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
import { useState } from "react"

const NuevaEvidencia = () => {

    const [listaTareas, setListaTareas] = useState([])

    return (
        <>
            <p>Tarea Seleccionada:</p>
            <SelectorTareaRA listaTareas={listaTareas} setListaTareas={setListaTareas}></SelectorTareaRA>
            <NuevaEvidenciaForm></NuevaEvidenciaForm>
        </>
    )
}

export default NuevaEvidencia