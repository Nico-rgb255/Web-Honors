import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Cursos from './pages/Cursos.js'
import Ejercicios from './pages/Ejercicios.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cursos" element={<Cursos />}/>
      <Route path="/ejercicios" element={<Ejercicios />}/>
    </Routes>
  );
}

export default App;
