import React from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";
import { useState } from "react";
import '../styles/Home.css'
import '../styles/Efects.css'

function Home(props){
    const [actual_state, setActivado] =useState(GetLocalStorage("actual_state"));

    //Esto crea una varible 'dinamica' en memoria.
    //useState es una función con valor inicial que devuelve una variable y una función respectivamente en forma de par
    //la primera es la variable y la segunda es la función
    //la funcíon es única para la variable. Solo modifica la variable asignada al aplicarle un valor.
    //Además, la función actualiza ese fragmento de codigo siempre que se actualice para poder mostrarlo en render.
    
    return(
    <div  className={actual_state ? "ohome home" : "chome home"}>
        {/*Header*/}
        <div>
            <Header setUser= {props.setUser} update = {setActivado} state = {actual_state}/>
        </div>

        {/*Banner*/}
        <div id="banner" className={actual_state ? "obannercss" : "cbannercss"}>
            <div id="Welcome" className="info_text">
                <div id="WBox" className="glass">
                    <h2>¡Bienvenido!</h2>
                    <p>Bienvenido a nuestra pagina web. En este sitio podrás mejorar todas las áreas de conocimiento que desees.</p>
                </div>
                
                
            </div>
            <div id="Welcome">
                <div id="WBox" className="glass">
                    <h1>Muchos cursos disponibles</h1>
                    <p>Tenemos una gran variedad de cursos. Te invitamos a visitar las distintas paginas disponibles en la barra de navegación</p>
                        
                </div>
            </div>
        </div>

    </div>
    );
}

export default Home;