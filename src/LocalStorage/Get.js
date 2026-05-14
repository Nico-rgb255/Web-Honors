function GetLocalStorage(){
    const jsonvalue = localStorage.getItem("actual_state"); //obtenemos la variable gurdada en "state".
    const final_value = JSON.parse(jsonvalue) // Transforma el JSON al tipo de variable original.
    return final_value == null ? 0 : final_value;
}

export default GetLocalStorage;