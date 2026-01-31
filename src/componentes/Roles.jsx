import { useContext } from "react";
import TokenContext from "./TokenContext";
import UserContext from "./UserContext";

function Roles() {
    
    const token = useContext(TokenContext)
    const usuario = useContext(UserContext)

    return(
        <aside>
            <h2>ROLES</h2>
            <p>Token: {token}</p>
            <p>Usuario: {usuario}</p>
        </aside>
    )
}
export default Roles