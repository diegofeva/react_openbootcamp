import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Contact from '..//models/Contact';
import ComponentB from './componentB';

class ComponentA extends Component { 

    constructor(props){
        super(props);
    }

    contact1 = new Contact("pepe","Domingo","pepe@domingo.com",false);

    

    render() {
        return(
            <div>
                 <ComponentB contact={this.contact1}></ComponentB>
                 <p>hola</p>
            </div>
        );
    };


}

ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}    

export default ComponentA