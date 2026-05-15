import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import '../styles/Ejercicios.css'

import C31E from '../imagenes/C3 1E.png'
import C31S from '../imagenes/C3 1S.png'


function Ejercicios() {
    // MODO OSCURO
    const [actual_state, setActivado] = useState(GetLocalStorage());

    /*
    
    LOGICA ANTIGUA DEL BOTON
    
        // BOTON DINAMICO
        const [botonDinamico1, setbotonDinamico1] = useState(false);
        // BOTON DINAMICO 2
        const [botonDinamico2, setbotonDinamico2] = useState(false);
        // BOTON DINAMICO 3
        const [botonDinamico3, setbotonDinamico3] = useState(false);
        // BOTON DINAMICO 4
        const [botonDinamico4, setbotonDinamico4] = useState(false);
    
    */

    // LISTA EJERCICIOS
    const lista_ejercicios = [
        { id: 1, ramo: 'Cálculo III', enunciado: <img src={C31E} alt="C3 1E" />, solucion: <img src={C31S} alt="C3 1S" />, temario: 'Torsión y Curvatura' },
        { id: 2, ramo: 'Cálculo III', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 3, ramo: 'Cálculo III', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 4, ramo: 'Ecuaciones Diferenciales', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 5, ramo: 'Ecuaciones Diferenciales', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 6, ramo: 'Ecuaciones Diferenciales', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 7, ramo: 'Termodinámica', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 8, ramo: 'Termodinámica', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 9, ramo: 'Termodinámica', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },

    ];

    // VARIABLE DE FILTROS
    const [filtro, setFiltro] = useState("No-filtro");

    // FILTRAJE DE EJERCICIOS -w-b
    const ejerciciosfiltrados = filtro === "No-filtro"
        ? lista_ejercicios
        : lista_ejercicios.filter(ej => ej.ramo === filtro);

    return (
        <div className={actual_state ? "oej" : "cej"}>
            <Header update={setActivado} state={actual_state} />
            <div style={titulo}>
                <h1>Ejercicios</h1>
            </div>

            <div style={boton_contenedor}>
                <button
                    onClick={() => { setFiltro("No-filtro") }}
                    className='boton-desactivado'
                >No Filtrar</button>
                <button onClick={() => { setFiltro("Cálculo III") }}
                    className='boton-desactivado'
                >Cálculo III</button>
                <button onClick={() => { setFiltro("Termodinámica") }}
                    className='boton-desactivado'
                >Termodinámica</button>
                <button onClick={() => { setFiltro("Ecuaciones Diferenciales") }}
                    className='boton-desactivado'
                >Ecuaciones Diferenciales</button>
            </div>

            {ejerciciosfiltrados.map((ej) => (
                <div key={ej.id} style={contenedor_ejercicios}>
                    <h2>{ej.ramo}</h2>
                    <p style={temario}>{ej.temario}</p>
                    <p style={enunciado}>Enunciado
                        {ej.enunciado}</p>
                    <p style={enunciado}>Solución
                        {ej.solucion}</p>
                </div>
            ))}
        </div>
    );
}

// Estilos type shi

const titulo = {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px'
}

const contenedor_ejercicios = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    gap: '10px',
    border: '4px solid',
    margin: '10px'
}

const temario = {
    display: 'flex',
    fontSize: '12px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    gap: '10px',
    border: '2px solid',
    margin: '10px'
}

const enunciado = {
    display: 'flex',
    fontSize: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '10px',
    margin: '10px'
}

const boton_contenedor = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'center',
}

export default Ejercicios;