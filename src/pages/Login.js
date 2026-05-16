import { GoogleLogin } from '@react-oauth/google';


// --- COMPONENTES DE PÁGINAS SIMPLIFICADOS ---
function Pagina_login(props) {

    function verificado(respuesta){
        console.log("1. ¡Google me devolvió datos con éxito!", respuesta);
        props.devolver_datos(respuesta)
    }
    function Error(){
        console.log('Hubo un error en el inicio de sesión');
    }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Página de Login</h2>
      <GoogleLogin onSuccess={verificado} onError={Error}/> {/*Le pasamos las funciones definidas como punteros en memoria*/}
    </div>
  );
}

export default Pagina_login;