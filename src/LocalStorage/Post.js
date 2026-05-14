
function PostLocalStorage(modo_actual){ // 1 = oscuro, 0 = claro.
    localStorage.setItem("actual_state", JSON.stringify(modo_actual)); //Guarda el objeto en vez de un string. Util para booleanos
}

export default PostLocalStorage;