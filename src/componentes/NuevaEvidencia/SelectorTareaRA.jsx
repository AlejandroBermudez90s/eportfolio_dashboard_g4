import tareasRA from "../../mocks/mock-tareasRA"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Evidencias.css"

const SelectorTareaRA = (props) => {

    function mostrarTareas() {
        return <ul>{props.setListaTareas(tareasRA.lista)}</ul>
    }

    function borrarTareas() {
        props.setListaTareas([])
    }

    return (
        <div className="centro">
            <h2>Selector Tarea</h2>
            <p>Todas las tareas:</p>
            {props.listaTareas.map(props.verTareas)}

            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={mostrarTareas}>Mostrar tareas</Button>
                <Button variant="contained" onClick={borrarTareas}>Borrar tareas</Button>
            </Stack>
        </div>
    )
}

export default SelectorTareaRA