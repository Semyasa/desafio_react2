import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from './Boton'

const Input = () => {

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    let mostrarono = "none";

    if(password === "252525"){
        mostrarono = " ";
    }else{
        mostrarono = "none";
    }

    return(

        <form>
            <div className="form-group">
                <p>Nombre:</p>
                <input className="form-control" name="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                <p>Contraseña:</p>
                <input className="form-control" name="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Boton estado={mostrarono}/>
            </div>
        </form>
    )

}

export default Input