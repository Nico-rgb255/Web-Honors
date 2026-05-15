import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import CardCurso from "../components/CardCurso"; // <-- IMPORTANTE: Traes el molde

function Cursos() {
    const [actual_state, setActivado] = useState(GetLocalStorage());

    return (
        <>
            <Header update={setActivado} state={actual_state}/>
            <h1>Esto es cursos</h1>
            
            {/* Aquí usas el componente y le pasas la info por props */}
            <div className="contenedor-cursos">
                <CardCurso 
                    nombre="Cálculo III" 
                    descripcion="Vectores e integrales múltiples." 
                />
                <CardCurso 
                    nombre="Física II" 
                    descripcion="Ondas, óptica y termodinámica." 
                />
            </div>
        </>
    );
}

export default Cursos;