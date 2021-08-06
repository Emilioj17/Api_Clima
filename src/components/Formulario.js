import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Formulario = ({ datos, setDatos, setRetornoApi }) => {
    const { ciudad, pais } = datos;

    const Handler = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const HandlerClick = async (event) => {
        const key = "4355e1f49fa588f2645b8c5b8144fd27";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${key}&units=metric&lang={es}`
        const response = await fetch(url);
        const data = await response.json();
        setRetornoApi(data);
    };


    return (
        <div className="formulario bg-light m-2 p-2">
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Pais</label>
                <select className="form-select" id="inputGroupSelect01" name="pais" onChange={(e)=>Handler(e)}>
                <option selected>Escoge...</option>
                <option value="chl">Chile</option>
                <option value="arg">Argentina</option>
                <option value="bra">Brasil</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Ciudad</label>
                <select className="form-select" id="inputGroupSelect01" name="ciudad" onChange={(e)=>Handler(e)}>
                <option selected>Escoge...</option>
                <option value="mendoza">Mendoza</option>
                <option value="santiago">Santiago</option>
                <option value="brasilia">Brasilia</option>
                </select>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button" onClick={(e) => HandlerClick(e)}>Ver Clima</button>
            </div>
        </div>
    );
}
 
export default Formulario;