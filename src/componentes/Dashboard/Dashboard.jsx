import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

function Dashboard(props) {

    const usuario = useContext(UserContext)

    return (
        <main>
            <h2>MAIN</h2>
            <p>Menú: {props.menu}</p>
            <p>Usuario: {usuario}</p>
        </main>
    )
}
export default Dashboard;
