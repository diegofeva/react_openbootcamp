import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function AboutPage () {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are on Route', location.pathname); // Devuelve la ruta about o faqs
    
    const navigateTo = (path) => {
        navigate(path);    
    }
    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate(+1);
    }

    return (
        <div>
        <h1>ABOUT || FAQS</h1>
        <div>
            <button onClick={ () => navigateTo('/') }>
                Go to home
            </button>
            <button onClick={ goBack }>
                Got back
            </button>
            <button onClick={ goForward }>
                Go forward
            </button>
        </div>
        </div>    
    )
}

export default AboutPage;