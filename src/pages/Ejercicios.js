import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import '../styles/Ejercicios.css'

function Ejercicios(props) {
    const [actual_state, setActivado] = useState(GetLocalStorage("actual_state"));

    // LISTA EJERCICIOS
    const lista_ejercicios = [
        { id: 1, ramo: 'Cálculo III', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 2, ramo: 'Cálculo III', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 3, ramo: 'Termodinámica', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
        { id: 4, ramo: 'Ecuaciones Diferenciales', enunciado: 'Enunciado', solucion: 'Solución', temario: 'Temario' },
    ];

    // VARIABLE DE FILTROS
    const [filtro, setFiltro] = useState("No-filtro");

    // FILTRAJE DE EJERCICIOS
    const ejerciciosfiltrados = filtro === "No-filtro"
        ? lista_ejercicios
        : lista_ejercicios.filter(ej => ej.ramo === filtro);

    return (
        <div className={actual_state ? "oej" : "cej"}>
            <Header setUser={props.setUser} update={setActivado} state={actual_state} />
            <div style={titulo}>
                <h1>Ejercicios</h1>
            </div>

            <div style={boton}>
                <button onClick={() => setFiltro("No-filtro")}>No Filtrar</button>
                <button onClick={() => setFiltro("Cálculo III")}>Cálculo III</button>
                <button onClick={() => setFiltro("Termodinámica")}>Termodinámica</button>
                <button onClick={() => setFiltro("Ecuaciones Diferenciales")}>Ecuaciones Diferenciales</button>
            </div>

            {ejerciciosfiltrados.map((ej) => (
                <div key={ej.id} style={contenedor_ejercicios}>
                    <h2>{ej.ramo}</h2>
                    <p style={temario}>{ej.temario}</p>
                    <p>{ej.enunciado}</p>
                    <p>{ej.solucion}</p>
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

const boton = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'center'
};

export default Ejercicios;