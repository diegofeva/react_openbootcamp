/**
 * Ejemplo de uso del hook useState
 * Crear un componente de tipo función 
 * y acceder a su estado privado a través
 * de un hook y, además porder modificarlo
 */

import React, {useState} from 'react'


const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;
    //valor incial para persona
    const personaInicial = {
        nombre : "juan",
        email: "juan@juan.com"
    }

    /**
     * Queremos que el ValorInicial y personaInicial sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable,setVariable] = useState(valorInicial)
     */

    const [contador,setContador] = useState(valorInicial);
    const [persona,setPersona] = useState(personaInicial);

    /**
     * Función para cambiar el nombre de la persona y el email
     * 
     */
    const cambiarPersona = () => {
        setPersona ({
            nombre: "Pepe",
            email: "pepe@pepe.com"
        })
    }

    /**
     * Función para actualizar el estado privado que contiene el contador
     *  
     */
    function incrementarContador() {
        // funcionParaCambiar(nuevoValor);
        setContador(contador + 1);
    }


    return (
        <div>
            <p>
                Hola soy {persona.nombre} <br/> el contador esta en {contador} <br/> tengo el email: {persona.email}
            </p>

            <button onClick={cambiarPersona}>Cambia de persona</button>
            <button onClick={incrementarContador}>Incrementa el contador</button>

            <p>
                el valor incial es {valorInicial} y la persona incial es {personaInicial.nombre}
            </p>

        </div>
    )
}

export default Ejemplo1;



