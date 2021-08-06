import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Formulario = ({ datos, setDatos, setRetornoApi }) => {
    const { ciudad, pais } = datos;

    const Handler = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const HandlerClick = async (event) => {
        const key = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${key}&units=metric&lang={es}`
        const response = await fetch(url);
        const data = await response.json();
        setRetornoApi(data.main);
    };

    let Ciudad2;
    const Ciudad = () => {
        if (pais === "chl") {
            let Ciudad2 = ["arica", "santiago", "linares"]
        } else if (pais === "arg") {
            let Ciudad2 = ["mendoza", "rosario", "salta"]
        } else if (pais === "bra") {
            let Ciudad2 = ["brasilia", "natal", "curitiba"]
        } else {
            let Ciudad2;
        }
        console.log(Ciudad2);
        return (Ciudad2);
    }


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
                <select className="form-select" id="inputGroupSelect01" name="ciudad" onChange={(e) => Handler(e)}>
                    <option selected>Escoge...</option>
                    <option value={Ciudad[0]}>{Ciudad[0]}</option>
                    <option value={Ciudad[1]}>{Ciudad[1]}</option>
                    <option value={Ciudad[2]}>{Ciudad[2]}</option>
                    <Ciudad/>
                </select>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button" onClick={(e) => HandlerClick(e)}>Ver Clima</button>
            </div>
        </div>
    );
}
 
export default Formulario;
