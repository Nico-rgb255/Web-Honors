import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import CardCurso from "../components/CardCurso"; // <-- IMPORTANTE IMPORTANTE IMPORTAR EL COMPONENTE PARA USARLO
import { textoFisicaLong, textoCalculoLong, textoEcuacionesdiferenciales } from "./textosCursos";
import '../styles/cursos.css'


function Cursos() {
    const [actual_state, setActivado] = useState(true);
    // Ahora el estado guarda el OBJETO del curso, no solo el nombre
    const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

    const misCursos = [
        { id: 1, nombre: "Termodinámica", desc: "¿De que trata la fisica?", contenido: textoFisicaLong },
        { id: 2, nombre: "Cálculo III", desc: "Integrales derivadas y más", contenido: textoCalculoLong },
        { id: 3, nombre: "Ecuaciones diferenciales", desc: "Como crece una poblacion como cambian las cosas", contenido: textoEcuacionesdiferenciales }
    ];

    // SI HAY ALGO SELECCIONADO MOSTRAR 
if (cursoSeleccionado) {
    return (
        <div className={actual_state ? "oej" : "cej"}>
            <Header update={setActivado} state={actual_state}/>
            
            <div className="detalle-curso">
                <h1 className="titulo-moderado" style={{ paddingTop: '20px' }}>
                    {cursoSeleccionado.nombre}
                </h1> 
                
                <p className="texto-normal">
                    <strong>Descripción:</strong> {cursoSeleccionado.desc}
                </p>
                
                {/* El dangerous es para que pase el html y lo exporte bien si no no funciona */}
                <div 
                    className="texto-largo" 
                    dangerouslySetInnerHTML={{ __html: cursoSeleccionado.contenido }} 
                />
                
                <hr />
                <button className="btn-tarjeta" onClick={() => setCursoSeleccionado(null)}>Volver a la lista</button>
            </div>
        </div>
    );
}

return (
    /* Esto es para el modo oscuro*/
    <div className={actual_state ? "oej" : "cej"}>
        <Header update={setActivado} state={actual_state}/>
        {/*Aqui se muestra todo*/}
        <h1 className="titulo-moderado" style={{ paddingTop: '20px' }}>
            Mis Cursos
        </h1>

        <div className="grid-cursos">
            {misCursos.map((curso) => (
                <CardCurso 
                    key={curso.id}
                    nombre={curso.nombre} 
                    descripcion={curso.desc} 
                    alClick={() => setCursoSeleccionado(curso)} 
                />
            ))}
        </div>
    </div>
);
}

export default Cursos;