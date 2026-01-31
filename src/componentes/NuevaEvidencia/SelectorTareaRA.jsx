import tareasRA from "../../mocks/mock-tareasRA"

const SelectorTareaRA = (props) => {

    function verTareas(tarea) {
        return <li key={tarea.id}>{tarea.observaciones}</li>
    }

    function mostrarTareas() {
        return <ul>{props.setListaTareas(tareasRA.lista)}</ul>
    }

    function borrarTareas() {
        props.setListaTareas([])
    }

    return (
        <>
            <h1>Selector Tarea</h1>
            <p>Todas las tareas:</p>
            {props.listaTareas.map(verTareas)}

            <button onClick={mostrarTareas}>Mostrar tareas</button>
            <button onClick={borrarTareas}>Borrar tareas</button>
        </>
    )
}

export default SelectorTareaRA