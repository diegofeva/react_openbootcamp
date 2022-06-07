/**
 * Ejemplo de uso de:
 * useState
 * useRef -> identificar valores o elementos dentro de la vista
 * useEffect -> controlar cambios en la vista
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    // vamos a crear 2 contadores distintos
    // cada uno en un esttado distinto

    const [contador1,setContador1] = useState(0);
    const [contador2,setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar
    // una variable con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }
    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con UseEffect
     */

    /**
     * Caso 1: Ejecutar siempre un snippet de código
     * Cada vex que haya un cambio en el estado del componente
     * se ejcuta lo que este dentro del useEffect()
     */
    // useEffect( () => {
    //         console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //         console.log('Mostrando referencia a elemento del DOM');
    //         console.log(miRef);
    //     })

    /**
     * Caso2: Ejecutar useEffect() solo cuando cambie contador 1
     * En caso de que cambie el contador 2 no hanbra ejecución
     */
    useEffect( () => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1]);

    /**
     * Caso3: Ejecutar useEffect() solo cuando cambie contador 1
     * o el contador 2
     * Si cambia algo más no habra llamada a la función
     */
    //  useEffect( () => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando referencia a elemento del DOM');
    //     console.log(miRef);
    // }, [contador1, contador2]);



    return (
        <div>
            <p>
                Hola el contador 1 esta a: {contador1} <br/> el contador 2 esta a {contador2}
            </p>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                <p>Soy el h4 que esta usando useREF estoy siendo referenciado</p>
            </h4>

            <button onClick={incrementar1}>Incrementa el contador 1</button>
            <button onClick={incrementar2}>Incrementa el contador 2</button>

            <p>
                {/* el valor incial es {valorInicial} y la persona incial es {personaInicial.nombre} */}
            </p>
        </div>
    )

}

export default Ejemplo2;