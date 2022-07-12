import Button from '@mui/material/Button';
import React from 'react';
import Copyright from '../../components//pure//Copyright' 
import {useNavigate}from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const logOut = () => {
        navigate('/login')

    }
    return ( 
        <div>
            <Button variant="contained" onClick={logOut}>Log out</Button>
            <Copyright/>
        </div>
    )
}

export default Dashboard;