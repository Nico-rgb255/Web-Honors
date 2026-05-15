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
        { id: 1, nombre: "Dinamica", desc: "¿De que trata la fisica?", contenido: textoFisicaLong },
        { id: 2, nombre: "Cálculo III", desc: "Integrales derivadas y más", contenido: textoCalculoLong },
        { id: 3, nombre: "Ecuaciones diferenciales", desc: "Python para todos", contenido: textoEcuacionesdiferenciales }
    ];

    // SI HAY ALGO SELECCIONADO, MOSTRAR EL DETALLE GENÉRICO
    if (cursoSeleccionado) {
        return (
            <>
                <Header update={setActivado} state={actual_state}/>
    <div className="detalle-curso">
        <h1 className="titulo-moderado">{cursoSeleccionado.nombre}</h1> 
        <p className="texto-normal"><strong>Descripción:</strong> {cursoSeleccionado.desc}</p>
    
        {/* CORRECTO: La propiedad va pegada al div, no entre llaves de contenido */}
        <div 
            className="contenido texto-normal" 
            // Esto es para que la wea sepa que el texto de textos cursos es html
            dangerouslySetInnerHTML={{ __html: cursoSeleccionado.contenido }} 
        />
    
    <hr />
    <button onClick={() => setCursoSeleccionado(null)}>Volver a la lista</button>
</div>
            </>
        );
    }

    // SI NO, MOSTRAR LA LISTA USANDO .MAP
    return (
        <>
            <Header update={setActivado} state={actual_state}/>
            <h1>Mis Cursos</h1>
            <div className="grid-cursos">
                {misCursos.map((curso) => (
                    <CardCurso 
                        key={curso.id}
                        nombre={curso.nombre} 
                        descripcion={curso.desc} 
                        alClick={() => setCursoSeleccionado(curso)} // Guardamos el objeto entero
                    />
                ))}
            </div>
        </>
    );
}

export default Cursos;