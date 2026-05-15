import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";

function Ejercicios() {
    const [actual_state, setActivado] = useState(GetLocalStorage());

    const lista_ejercicios = [
        { id: 1, ramo: 'Cálculo III', enunciado: 'este es un enunciado de prueba', solucion: 'xd', temario: 'cosas de las q trata' },
        { id: 2, ramo: 'Cálculo III', enunciado: 'este es un enunciado de prueba 2', solucion: 'xd 2', temario: 'cosas de las q trata' },
        { id: 3, ramo: 'Termodinámica', enunciado: 'este es un enunciado de prueba 3', solucion: 'xd 3', temario: 'cosas de las q trata' },
        { id: 4, ramo: 'Ecuaciones Diferenciales', enunciado: 'este es un enunciado de prueba 4', solucion: 'xd 4', temario: 'cosas de las q trata' },
    ];

    const [filtro, setFiltro] = useState("No-filtro");

    const ejerciciosfiltrados = filtro === "No-filtro"
        ? lista_ejercicios
        : lista_ejercicios.filter(ej => ej.ramo === filtro);

    return (
        <>
            <Header update={setActivado} state={actual_state} />
            <div style={titulo}>
                <h1>Ejercicios</h1>
            </div>

            <div style={boton}>
                <button onClick={() => setFiltro("No-filtro")}>No Filtrar</button>
                <button onClick={() => setFiltro("Cálculo III")}>Cálculo III</button>
                <button onClick={() => setFiltro("Termodinámica")}>Termodinámica</button>
                <button onClick={() => setFiltro("Ecuaciones Diferenciales")}>Ecuaciones Diferenciales</button>
            </div>

            {ejerciciosfiltrados.map((ej) => ( //{lista_ejercicios.filter(ej => ej.ramo == 'Cálculo III').map((ej) => (
                <div key={ej.id} style={contenedor_ejercicios}>
                    <h2>{ej.ramo}</h2>
                    <p style={temario}>{ej.enunciado}</p>
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

const temario = {
    display: 'flex',
    fontSize: '12px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    gap: '10px',
    border: '2px solid #333',
    margin: '10px'
}

const boton = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'center'
};

export default Ejercicios;