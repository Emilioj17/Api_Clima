import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Formulario = ({setDatos}) => {
    return (
        <div className="formulario bg-light m-2 p-2">
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Pais</label>
                <select className="form-select" id="inputGroupSelect01">
                <option selected>Escoge...</option>
                <option value={1}>Chile</option>
                <option value={2}>Argentina</option>
                <option value={3}>Brasil</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Ciudad</label>
                <select className="form-select" id="inputGroupSelect01">
                <option selected>Escoge...</option>
                <option value={1}>Arica</option>
                <option value={2}>Santiago</option>
                <option value={3}>Puerto Montt</option>
                </select>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button">Ver Clima</button>
            </div>
        </div>
    );
}
 
export default Formulario;