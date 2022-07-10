import React from 'react';
import {useLocation} from 'react-router-dom';

const StatePage = () => {
    const location = useLocation();
    
    

    return (
        <div>
            <h1>State: {location.state.online? "true" : "false" }</h1>
            <h2>Search: {location.search} </h2>
        </div>
    );
}

export default StatePage;
