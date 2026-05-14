import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";

function Ejercicios(){
    const [actual_state, setActivado] =useState(GetLocalStorage());

    return(
        <>
        <Header update = {setActivado} state = {actual_state}/>
        <h1>Esto es ejercicios</h1>
        </>
    );
}

export default Ejercicios;