import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Formulario = ({ datos, setDatos, setRetornoApi }) => {
    const { ciudad, pais } = datos;

    const Handler = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const HandlerClick = async (event) => {
        const key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXx";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${key}&units=metric&lang={es}`
        const response = await fetch(url);
        const data = await response.json();
        setRetornoApi(data.main);
    };

    const chile = ["arica", "santiago", "linares"];
    const argentina = ["mendoza", "rosario", "salta"];
    const brasil = ["brasilia", "natal", "curitiba"];

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
                    {(pais==="chl") ? (
                        <select className="form-select" id="inputGroupSelect01" name="ciudad" onChange={(e) => Handler(e)}>
                            <option selected>Escoge...</option>
                            <option value={chile[0]}>{chile[0][0].toUpperCase()+chile[0].substring(1)}</option>
                            <option value={chile[1]}>{chile[1][0].toUpperCase()+chile[1].substring(1)}</option>
                            <option value={chile[2]}>{chile[2][0].toUpperCase()+chile[2].substring(1)}</option>
                        </select>
                    ): (
                            null
                    )}
                    {(pais==="arg") ? (
                        <select className="form-select" id="inputGroupSelect01" name="ciudad" onChange={(e) => Handler(e)}>
                            <option selected>Escoge...</option>
                            <option value={argentina[0]}>{argentina[0][0].toUpperCase()+argentina[0].substring(1)}</option>
                            <option value={argentina[1]}>{argentina[1][0].toUpperCase()+argentina[1].substring(1)}</option>
                            <option value={argentina[2]}>{argentina[2][0].toUpperCase()+argentina[2].substring(1)}</option>
                        </select>
                    ): (
                            null
                    )}
                    {(pais==="bra") ? (
                        <select className="form-select" id="inputGroupSelect01" name="ciudad" onChange={(e) => Handler(e)}>
                            <option selected>Escoge...</option>
                            <option value={brasil[0]}>{brasil[0][0].toUpperCase()+brasil[0].substring(1)}</option>
                            <option value={brasil[1]}>{brasil[1][0].toUpperCase()+brasil[1].substring(1)}</option>
                            <option value={brasil[2]}>{brasil[2][0].toUpperCase()+brasil[2].substring(1)}</option>
                        </select>
                    ): (
                            null
                    )}
                
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button" onClick={(e) => HandlerClick(e)}>Ver Clima</button>
            </div>
        </div>
    );
}
 
export default Formulario;
