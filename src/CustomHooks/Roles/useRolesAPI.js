import { useContext, useEffect, useState } from "react";
import getAllRoles from "../../services/Roles/getAllRoles.js";
import UserContext from "../../componentes/Contexts/UserContext.jsx";


const useRolesAPI = (user) => {

    const [buscando, setBuscando] = useState(false)

    const [lista, setLista] = useState([])

    function obtenerRoles() {
        setBuscando(true);
        getAllRoles().then((roles) => {
            const listaRoles = roles[user]?.roles ?? []
            setLista(listaRoles)
            setBuscando(false)
        })
    }

    useEffect(obtenerRoles, [user])

    return { buscando, lista }
}

export default useRolesAPI;