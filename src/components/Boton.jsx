import React from "react";
import Button from "react-bootstrap/Button"; 

const Boton = (props) => {

    return(

            <div>
                <Button className="btn btn-dark mt-3" type="submit" style={{display:props.estado}}>Enviar</Button>
            </div>

    )

}

export default Boton