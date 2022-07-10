import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';



const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are on Route', location.pathname); // Devuelve la ruta about o faqs
    
    const navigateTo = (path) => {
        navigate(path);    
    }

    const navigateProps = (path) => {
        navigate(
            {
                pathname: 'online-state',
                search: 'online=true',
            },
            {state:{online: true}}
        )
    }

   return (
        <div>
            <h1>HOME PAGE </h1>
            <h2>Dashboard</h2>
            <button onClick={() => navigateTo('/profile')}>
                Go to profile
            </button>
            <button onClick={() => navigateProps('/online-state')}>
                Go to state
            </button>
        </div>
    );
}

export default HomePage;
