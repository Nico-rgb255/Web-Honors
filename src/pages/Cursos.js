import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import CardCurso from "../components/CardCurso"; // <-- IMPORTANTE IMPORTANTE IMPORTAR EL COMPONENTE PARA USARLO

function Cursos() {
    const [actual_state, setActivado] = useState(true);
    // Ahora el estado guarda el OBJETO del curso, no solo el nombre
    const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

    const misCursos = [
        { id: 1, nombre: "Física II", desc: "Ondas y Calor", contenido: "Guía 1: Termodinámica..." },
        { id: 2, nombre: "Cálculo III", desc: "Integrales", contenido: "Teorema de Green y Stokes..." },
        { id: 3, nombre: "Programación", desc: "Python", contenido: "Listas y Diccionarios..." }
    ];

    // SI HAY ALGO SELECCIONADO, MOSTRAR EL DETALLE GENÉRICO
    if (cursoSeleccionado) {
        return (
            <>
                <Header update={setActivado} state={actual_state}/>
                <div className="detalle-curso">
                    <h1>{cursoSeleccionado.nombre}</h1> {/* Se llena solo */}
                    <p><strong>Descripción:</strong> {cursoSeleccionado.desc}</p>
                    <div className="contenido">
                        {cursoSeleccionado.contenido}
                    </div>
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