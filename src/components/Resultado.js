import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';

const Resultado = ({ retornoApi, datos }) => {
    if (retornoApi) {
        let { temp, temp_min, temp_max, pressure, humidity } = retornoApi;
        let { ciudad, pais } = datos;
        return (
            <div className="resultado bg-light m-2">
                <p>La temperatura para la ciudad de {ciudad}:</p>
                <h1>{temp} ℃</h1>
                <div className="temperaturas">
                    <p>Temperatura Mínima: </p><span>{temp_min} ℃</span>
                    <p>Temperatura Máxima: </p><span>{temp_max} ℃</span>
                    <p>Pression: </p><span>{pressure} mmHg</span>
                    <p>Humedad: </p><span>{humidity} %</span>
                </div>

            </div>
        );
    } else {
        return (
            <div className="resultado bg-light m-2">
                Elige una Opción.
            </div>
        );
    }
}
 
export default Resultado;