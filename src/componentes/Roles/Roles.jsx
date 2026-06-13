
import TokenContext from "../Contexts/TokenContext";
import UserContext from "../Contexts/UserContext";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useRoles from "../../CustomHooks/Roles/useRoles.js";
import useMisModulosImpartidos from "../../CustomHooks/MisModulosImpartidos/useMisModulosImpartidos.js";
import useMisModulosMatriculados from "../../CustomHooks/MisModulosMatriculados/useMisModulosMatriculados.js";
import opcionesMenu from "../../mocks/mock-administrador.js";

const MenuLateral = () => {
  const { lista: roles } = useRoles();
  const { lista: impartidos } = useMisModulosImpartidos();
  const { lista: matriculados } = useMisModulosMatriculados();
  const navigate = useNavigate();

  return (
    <>
      {roles.map((rol) => {
        if (rol === "administrador") {
          return (
            <Accordion key={rol}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{rol}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {opcionesMenu.administrador.map((opcion) => (
                  <Typography
                    key={opcion.ruta}
                    onClick={() => navigate(opcion.ruta)}
                    sx={{ cursor: "pointer", color: "primary.main", py: 0.5 }}
                  >
                    {opcion.nombre}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        }

        if (rol === "docente") {
          return (
            <Accordion key={rol}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{rol}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {impartidos.map((modulo) => (
                  <Typography
                    key={modulo.id}
                    onClick={() => navigate(`/funcionalidaddocente/${modulo.id}`)}
                    sx={{ cursor: "pointer", color: "primary.main", py: 0.5 }}
                  >
                    {modulo.nombre}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        }

        if (rol === "estudiante") {
          return (
            <Accordion key={rol}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{rol}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {matriculados.map((modulo) => (
                  <Typography
                    key={modulo.id}
                    onClick={() => navigate(`/funcionalidadestuiante/${modulo.id}`)}
                    sx={{ cursor: "pointer", color: "primary.main", py: 0.5 }}
                  >
                    {modulo.nombre}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        }

        return null;
      })}
    </>
  );
};

export default MenuLateral;