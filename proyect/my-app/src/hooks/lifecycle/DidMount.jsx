/**
 * Ejemplo de uso del método del ciclo de vida en 
 * componente clase y el hook del ciclo de vida en
 * componente funcional
 */


import React, {Component, useEffect} from 'react';

export class DidMount extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Comportamiento antes de que el componente se renderize al DOM');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    };
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente se renderize al DOM');
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}; 
