import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Formulario = ({ datos, setDatos }) => {
    const Handler = (event) => {
        setDatos({...datos,[event.target.name]: event.target.value })
    }
    return (
        <div className="formulario bg-light m-2 p-2">
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Pais</label>
                <select className="form-select" id="inputGroupSelect01" name="pais" onChange={(e)=>Handler(e)}>
                <option selected>Escoge...</option>
                <option value="Chile">Chile</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Ciudad</label>
                <select className="form-select" id="inputGroupSelect01" name="ciudad" onChange={(e)=>Handler(e)}>
                <option selected>Escoge...</option>
                <option value="Arica">Arica</option>
                <option value="Santiago">Santiago</option>
                <option value="Puerto Montt">Puerto Montt</option>
                </select>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button">Ver Clima</button>
            </div>
        </div>
    );
}
 
export default Formulario;