import React from "react"; //Virtual DOM crea copias de como se veia el html
import {useState} from "react";
import '../styles/Header.css' //el '..' pide que subamos de nivel de carpeta para salir de la actual.
import logo from '../imagenes/Logo.avif'
import PostLocalStorage from "../LocalStorage/Post";
import GetLocalStorage from "../LocalStorage/Get";

function Header(props){ //nota... llamar a setActivado llama de nuevo a la función header pero modificada. Puede generar bucles infinitos...

    const activado = props.state, setActivado = props.update;

    //Esto crea una varible 'dinamica' en memoria.
    //useState es una función con valor inicial que devuelve una variable y una función respectivamente en forma de par
    //la primera es la variable y la segunda es la función
    //la funcíon es única para la variable. Solo modifica la variable asignada al aplicarle un valor.
    //Además, la función actualiza ese fragmento de codigo siempre que se actualice para poder mostrarlo en render.

    async function modo(){
        const newactivado = !activado; //Actualizamos el valor.
        PostLocalStorage(newactivado); //guardamos primero el nuevo valor
        setActivado(newactivado); //Cambia la variable activado a su opuesto y actualiza la pagina con el nuevo valor actualizado
    }

    return(
        <div id="menu" className={activado ? "omenu" : "cmenu"}> {/*Creamos un div que contenga al header.*/}
            <img src={logo} alt="logo" className="logo" />
            <header> {/*Creamos el header. La etiqueta header no hace nada. Es lo mismo que el div pero es para diferenciar xd.*/}
                <ul className="navegation">
                    <li className="element"><a className={activado ? "olink" : "clink"} href="/">inicio</a></li> {/* La etiqueta a hace referencia a un "ancla" y es la forma en la que se crean hiperinculos en la web.*/}
                    <li className="element"><a className={activado ? "olink" : "clink"} href="/cursos">cursos</a></li> {/*href significa Hypertext Reference*/}
                    <li className="element"><a className={activado ? "olink" : "clink"} href="/ejercicios">ejercicios</a></li> {/*el '#' te lleva a la etiqueta que contenga dicho id dentro de la pagina. Sin '#' busca en el internet.*/}
                    <li><button className={activado ? "btn-dinamico" : "btn-activo"} onClick={modo}> {activado ? "Modo claro" : "Modo oscuro"} </button></li> {/*Boton con condicional de linea.*/}
                </ul>
            </header>
        </div>
    );
}

export default Header;