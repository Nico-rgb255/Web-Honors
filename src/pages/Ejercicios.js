import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import '../styles/Ejercicios.css'

import C31E from '../imagenes/C3 1E.png'
import C31S from '../imagenes/C3 1S.png'
import C32E from '../imagenes/C3 2E.png'
import C32S from '../imagenes/C3 2S.png'
import C33E from '../imagenes/C3 3E.png'
import C33S from '../imagenes/C3 3S.png'

import EDO1E from '../imagenes/EDO 1E.png'
import EDO1S from '../imagenes/EDO 1S.png'
import EDO2E from '../imagenes/EDO 2E.png'
import EDO2S from '../imagenes/EDO 2S.png'
import EDO3E from '../imagenes/EDO 3E.png'
import EDO3S from '../imagenes/EDO 3S.png'

import TERMO1E from '../imagenes/TERMO 1E.png'
import TERMO1S from '../imagenes/TERMO 1S.png'
import TERMO2E from '../imagenes/TERMO 2E.png'
import TERMO2S from '../imagenes/TERMO 2S.png'
import TERMO3E from '../imagenes/TERMO 3E.png'
import TERMO3S from '../imagenes/TERMO 3S.png'

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
        { id: 2, ramo: 'Cálculo III', enunciado: <img src={C32E} alt="C3 2E" />, solucion: <img src={C32S} alt="C3 2S" />, temario: 'Integral de línea' },
        { id: 3, ramo: 'Cálculo III', enunciado: <img src={C33E} alt="C3 3E" />, solucion: <img src={C33S} alt="C3 3S" />, temario: 'Superficies de revolución' },
        { id: 4, ramo: 'Ecuaciones Diferenciales', enunciado: <img src={EDO1E} alt="EDO 1E" />, solucion: <img src={EDO1S} alt="EDO 1S" />, temario: 'PVI de primer orden' },
        { id: 5, ramo: 'Ecuaciones Diferenciales', enunciado: <img src={EDO2E} alt="EDO 2E" />, solucion: <img src={EDO2S} alt="EDO 2S" />, temario: 'EDO homogenea de segundo orden' },
        { id: 6, ramo: 'Ecuaciones Diferenciales', enunciado: <img src={EDO3E} alt="EDO 3E" />, solucion: <img src={EDO3S} alt="EDO 3S" />, temario: 'EDO no homogenea de segundo orden' },
        { id: 7, ramo: 'Termodinámica', enunciado: <img src={TERMO1E} alt="TERMO 1E" />, solucion: <img src={TERMO1S} alt="TERMO 1S" />, temario: 'Primera ley en un sistema cerrado' },
        { id: 8, ramo: 'Termodinámica', enunciado: <img src={TERMO2E} alt="TERMO 2E" />, solucion: <img src={TERMO2S} alt="TERMO 2S" />, temario: 'Presión en fluidos' },
        { id: 9, ramo: 'Termodinámica', enunciado: <img src={TERMO3E} alt="TERMO 3E" />, solucion: <img src={TERMO3S} alt="TERMO 3S" />, temario: 'Sistema de flujo másico' },

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
                <button onClick={() => { setFiltro("Ecuaciones Diferenciales") }}
                    className='boton-desactivado'
                >Ecuaciones Diferenciales</button>
                <button onClick={() => { setFiltro("Termodinámica") }}
                    className='boton-desactivado'
                >Termodinámica</button>
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