import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";

function Ejercicios() {
    const [actual_state, setActivado] = useState(GetLocalStorage());

    const lista_ejercicios = [
        { id: 1, ramo: 'Cálculo III', enunciado: 'este es un enunciado de prueba', solucion: 'xd'},
        { id: 2, ramo: 'Cálculo III', enunciado: 'este es un enunciado de prueba 2', solucion: 'xd 2'},
    ];

    return (
        <>
            <Header update={setActivado} state={actual_state} />
            <div style={titulo}>
                <h1>Ejercicios</h1>
            </div>

            {lista_ejercicios.map((ej) => (
                <div key={ej.id} style={contenedor_ejercicios}>
                    <h2>{ej.ramo}</h2>
                    <p>{ej.enunciado}</p>
                    <p>{ej.solucion}</p>
                </div>
            ))}
        </>
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
    border: '4px solid #333',
    margin: '10px'
}

export default Ejercicios;