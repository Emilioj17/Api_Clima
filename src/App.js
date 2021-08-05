import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [datos, setDatos] = useState({
    ciudad: "",
    pais: ""
  })

  return (
    <div className="App">
      <div className="container text-center">
        <h1 className="titulo bg-light">Aplicación del Clima</h1>
        <Formulario setDatos={setDatos}/>
        <Resultado />
        <Footer />
      </div>
    </div>
  );
}

export default App;
