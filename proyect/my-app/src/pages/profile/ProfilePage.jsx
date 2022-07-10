import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function ProfilePage({ user }) {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are on Route', location.pathname); // Devuelve la ruta about o faqs
    
    const navigateTo = (path) => {
        navigate(path);    
    }
    const goBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigateTo('/tasks')}>
                tasks
            </button>           
            <button onClick={ goBack }>
                Go back
            </button>

        </div>
    )
}

export default ProfilePage