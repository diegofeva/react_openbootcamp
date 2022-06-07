/**
 * Ejemplo de componente de tipo clase que dispone
 * de los métodos del ciclo de vida
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props){
        super(props);
        console.log('CONSTRUCTOR: Se esta instanciando el componente');
    }



    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');

    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo despues del montaje del componente pero antes de renderizarlo');

    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props');

    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe o no debe actualizarse
         * return true;
         * return false;
        **/    
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: Justo antes de actualizarse');

    }

    componentDidUpdate(nextProps, nextState){
        console.log('DidUpdate: Justo después de actualizarse');

    }

    componentWillUnmount(){
        console.log('DidUpdate: Justo antes de desaparecer');


    }

    render(){
        return(
            <div>

            </div>
        )
    }


}

LifeCycleExample.propTypes = {

}
