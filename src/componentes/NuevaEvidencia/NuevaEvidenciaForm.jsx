import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Form, useForm } from 'react-hook-form'
import { useState, useContext } from 'react';
import UserContext from '../Contexts/UserContext';

const NuevaEvidenciaForm = (props) => {

	const { control, handleSubmit } = useForm()

	const usuario = useContext(UserContext)

	const [tareaInicial, setTareaInicial] = useState({ 
																											tarea_id 					: props.tareaSeleccionada.id,
 																											estudiante_id 		: usuario,
																											url								: "",
																											descripcion				: "",
 																											estado_validacion	: "pendiente" 
																										})
	
	function añadirEvidencia() {

		return <></>
	}

	return (
		<Form control={control} onSubmit={handleSubmit(añadirEvidencia)}>
			<TextField 
				id="outlined-basic" 
				label="URL" 
				variant="outlined" 
				fullWidth
			/>
			<TextField
				id="outlined-textarea"
				label="Observaciones"
				placeholder="Observaciones"
				multiline
				fullWidth
				margin="normal"
			/>
			<Stack direction="row" spacing={2} style={{marginLeft:550}}>
				<Button variant="contained" type="submit">Añadir evidencia</Button>
			</Stack>
		</Form>	
	)
}

export default NuevaEvidenciaForm