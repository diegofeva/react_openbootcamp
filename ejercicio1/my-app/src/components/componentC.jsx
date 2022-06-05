import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../models/Contact';
import ComponentD from './componentD';



function ComponentC() {

    const contact2 = new Contact("Juan", "Domingo", "juan@domingo.com", false);

    return (
        <div>
            <h1>Soy el h1 de ComponentC</h1>
            <ComponentD contact={contact2}></ComponentD>
        </div>    

    );
}

ComponentC.prototypes = {
    contact2: PropTypes.instanceOf(Contact)
}

export default ComponentC