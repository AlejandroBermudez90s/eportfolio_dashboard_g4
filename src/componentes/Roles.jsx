import { useContext } from "react";
import TokenContext from "./TokenContext";

function Roles() {
    
    const token = useContext(TokenContext)

    return(
        <aside>
            <h2>ROLES</h2>
            <p>Token: {token}</p>
        </aside>
    )
}
export default Roles