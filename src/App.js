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
  });
  const [retornoApi, setRetornoApi] = useState();

  return (
    <div className="App">
      <div className="container text-center">
        <h1 className="titulo bg-light">Aplicación del Clima</h1>
        <Formulario datos={datos} setDatos={setDatos} setRetornoApi={setRetornoApi}/>
        <Resultado retornoApi={retornoApi}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
