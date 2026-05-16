import { Navigate, Outlet } from "react-router-dom";

function Ruta_protegida(props){
    if(!props.Autenticado) return <Navigate to="/login" replace />; //Si no estpa logeado, redirige al login Navegate to
    return <Outlet/>//Si lo está, renderiza las paginas siguientes.
}

export default Ruta_protegida;