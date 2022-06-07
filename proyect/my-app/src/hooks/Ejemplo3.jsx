/**
 * Ejemplo de useState() y useContext()
 */

import React, {useState, useContext} from 'react';


const miContexto = React.createContext(null);


/**
 * 
 * @returns 
 * Dispone de un contexto que va a disponer
 *  de un valor que recibe desde el padre
 */
const Componente1 = () => {
    
    //Inicializamos un estado vacio que va arellenarse con los datos del padre
    // const state = React.createContext(null);

    const state = useContext(miContexto);
    
    return(
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2></Componente2>

        </div>
    );
}


const Componente2 = () => {
    const state = useContext(miContexto);

    return(
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sesionData,setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: "JWT123456789",
                sesion: sesionData.sesion + 1
            })
    }

    return (
        <div>
            <miContexto.Provider value={sesionData}>
                {/* Todo lo ques esta aqui dentro puede leer los datos de sesionData */}
                {/* Además si se actualiza, los componentes de aqui, tambíen se actualizan */}
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesión</button>
            </miContexto.Provider>

        </div>
    )
} 


