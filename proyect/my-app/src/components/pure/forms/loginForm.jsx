/**
 * Componente que va a contener un formulario para autentificar a los usuarios
 */

import React, {useEffect, useState} from 'react';

const LoginForm = () => {
    
    const initialCredentials = {
        user: "",
        password: "",
    }

    const [credentials,setCredentials] = useState(initialCredentials);

    return ( 
        <div>

        </div>
    );
};

export default LoginForm; 


