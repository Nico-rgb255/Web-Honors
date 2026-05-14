import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import '../styles/Home.css'

function Home(){
    const [actual_state, setActivado] =useState(GetLocalStorage());

    //Esto crea una varible 'dinamica' en memoria.
    //useState es una función con valor inicial que devuelve una variable y una función respectivamente en forma de par
    //la primera es la variable y la segunda es la función
    //la funcíon es única para la variable. Solo modifica la variable asignada al aplicarle un valor.
    //Además, la función actualiza ese fragmento de codigo siempre que se actualice para poder mostrarlo en render.
    
    return(
    <div  className={actual_state ? "ohome home" : "chome home"}>
        {/*Header*/}
        <div>
            <Header update = {setActivado} state = {actual_state}/>
        </div>

        {/*Banner*/}
        <div id="banner" className={actual_state ? "obannercss" : "cbannercss"}>
            <div id="Welcome" className="info_text">
                <div id="WBox"><h2>Bienvenido!</h2></div>
            </div>
            <div id="panel_sesion" className={actual_state ? "oiniciar" : "iniciar"}>
                <p>Este debe ser el panel de inicio de sesión</p>
            </div>
        </div>

    </div>
    );
}

export default Home;