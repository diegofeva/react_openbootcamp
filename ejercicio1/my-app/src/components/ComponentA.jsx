import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '..//models/Contact';
import ComponentB from './componentB';

class ComponentA extends Component(){
    constructor(props){
        super(props);
        contacto = new Contact("pepe","Domingo","pepe@domingo.com",false);
    }

    

    render() {
        return
        (
            <div>
                 <ComponentB contact={this.contacto}></ComponentB>
            </div>
        )
    }


}

ComponentA.propTypes = {
        
}

export default ComponentA