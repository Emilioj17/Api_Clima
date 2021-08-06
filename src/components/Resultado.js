import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Resultado = ({ retornoApi }) => {
    let temp;
    if (retornoApi) {
        let { temp, temp_min, temp_max, pressure, humidity } = retornoApi.main;
        // console.log(pressure);
    } else {
        let temp = "...cargando";
    }
    
    return (
        <div className="resultado bg-light m-2">
            Hola desde Resultado {temp} asd
        </div>
    );
}
 
export default Resultado;