import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Contact from '../models/Contact';

class ComponentB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conectado: false
        }

        this.toggleLog = this.toggleLog.bind(this);

    }

    toggleLog(){
        this.setState(x => ({
            conectado: !x.conectado
        }));

    }

    render(){
        return (
            <div>
            <p>aaaaa</p>
                <p>Soy el contacto {this.props.contact.NOMBRE}</p>
                <p>Tengo el apellido {this.props.contact.APELLIDO}</p>
                <p>Tengo el email {this.props.contact.email}</p>
                <p>Actualmente estoy {this.state.conectado? "conectado" : "desconectado"}</p>
                <button onClick={this.toggleLog}>{this.state.conectado? "desconectate" : "conectate"}</button>
                <button onClick={() => this.setState(prevState => ({conectado:!prevState.conectado}))}>{this.state.conectado? "desconectate" : "conectate"}</button>
            </div>
        )
    }

 
}

ComponentB.propTypes = {
    NOMBRE: PropTypes.string,
    APELLIDO: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,
    contact: PropTypes.instanceOf(Contact),
} 

export default ComponentB