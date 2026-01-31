import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NuevaEvidenciaForm = (props) => {

	function añadirEvidencia() {

        return <></>
    }


    function borrarTareas() {
        props.setListaTareas([])
        setTareaSeleccionada("")
    }

	return (
		<>
			<h2>Formulario Tarea</h2>
			<p>Tarea seleccionada: {props.tareaSeleccionada.id} - {props.tareaSeleccionada.observaciones}</p>
			<Stack direction="row" spacing={2}>
				<Button variant="contained" onClick={añadirEvidencia}>Añadir evidencia</Button>
				<Button variant="contained" onClick={borrarTareas}>Borrar tareas</Button>
			</Stack>
		</>
	)
}

export default NuevaEvidenciaForm