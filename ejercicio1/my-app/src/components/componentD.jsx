import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import Contact from '../models/Contact';

function ComponentD({contact}) {

    const [conectado,setConectado] = useState(false);

    function toggleLog()  {
        setConectado(!conectado);
    }

    

    return (
        <div>
            <h1>Soy el h1 de componentD</h1>
            <p>Soy el contacto {contact.NOMBRE}</p>
            <p>Tengo el apellido {contact.APELLIDO}</p>
            <p>Tengo el email {contact.email}</p>
            <p>Actualmente estoy {conectado? "conectado" : "desconectado"}</p>
            <button onClick={toggleLog}>{conectado? "desconectate" : "conectate"}</button>
            <button onClick={() => setConectado(!conectado)}>{conectado? "desconectate" : "conectate"}</button>
        </div>

    );
}

ComponentD.propTypes = {
    NOMBRE: PropTypes.string,
    APELLIDO: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,
    contact: PropTypes.instanceOf(Contact),

}

export default ComponentD