/**
 * Ejemplo de uso del component WillUnMount para
 * componente clase y para componente funcional
 */

import React, {Component,useEffect} from 'react';

export class WillUnMount extends Component {
    constructor(props){
        super(props);
    };

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    };

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    };
}

export const WillUnMountHook = () => {

    useEffect(() => {
        //aqui no se pone nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
    }, []);

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}
