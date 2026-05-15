import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Cursos from './pages/Cursos.js'
import Ejercicios from './pages/Ejercicios.js';
import Account from './pages/Account.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cursos" element={<Cursos />}/>
      <Route path="/ejercicios" element={<Ejercicios />}/>
      <Route path="/cuenta" element={<Account />}/>
    </Routes>
  );
}

export default App;
