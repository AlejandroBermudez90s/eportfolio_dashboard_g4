import { useContext } from "react";
import UserContext from "./UserContext";

function Cabecera (props) {

    const user = useContext(UserContext)

    return(
        <header>
            <h1>HEADER</h1>
            <p>Usuario: {props.usuario}</p>
            <p>Usuario (Context): {user}</p>
        </header>
    )
}

export default Cabecera;
