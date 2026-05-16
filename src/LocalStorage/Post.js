
function PostLocalStorage(variable, value){ // 1 = oscuro, 0 = claro.
    localStorage.setItem(variable, JSON.stringify(value)); //Guarda el objeto en vez de un string. Util para booleanos
}

export default PostLocalStorage;