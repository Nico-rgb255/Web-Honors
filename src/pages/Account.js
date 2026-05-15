import React, {useState} from "react";
import Header from "../components/Header";
import GetLocalStorage from "../LocalStorage/Get";

function Account_page(){

    const [actual_state, setActivado] =useState(GetLocalStorage());
    
    return(
        <>
        <div>
            <Header update = {setActivado} state = {actual_state}/>
        </div>
        <div>
            <h1>HOLAAAA</h1>
            <p>Este es la pagina de Account</p>
        </div>
        </>
    );
}

export default Account_page;