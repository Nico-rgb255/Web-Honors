import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home.js'
import Cursos from './pages/Cursos.js'
import Ejercicios from './pages/Ejercicios.js';
import Account from './pages/Account.js'
import Ruta_protegida from './components/ProtectedRoute.js';
import Pagina_login from './pages/Login.js';
import GetLocalStorage from './LocalStorage/Get.js';
import PostLocalStorage from './LocalStorage/Post.js';

function App() {

  const [user, setUser] = useState(GetLocalStorage("user_info")); //Creamos la funcion para reactualizar
  const Autenticado = (user !== null); //verifica si tiene datos
  function actualizar_usuario(datos){
    const new_value = datos;
    PostLocalStorage("user_info", new_value)
    setUser(new_value);
  }

  return (

      <Routes>
        <Route path="/login" element={Autenticado ? <Navigate to="/Home" replace={true}/> : <Pagina_login devolver_datos={actualizar_usuario}/>}/> //Llamamos a la pagina de login hasta que no esté verificado
        {/*Rutas que no aparecen hasta que sse cumpla la verificación*/}
        <Route element={<Ruta_protegida Autenticado={Autenticado}/>}>
          <Route path="/Home" element={<Home setUser={setUser}/>}/>
          <Route path="/ejercicios" element={<Ejercicios setUser={setUser}/>}/>
          <Route path="/cursos" element={<Cursos setUser={setUser}/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
      </Routes>

  );
}

export default App;
