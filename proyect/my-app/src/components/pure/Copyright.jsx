import React from 'react';

//Material ui components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant='body2' color="Graytext" align='center'>
            {'Copyright (C)'}
            <Link color={'inherit'} href='http://imaginaformacion.com'>
                Imagina Formación
            </Link>
            { ' ' }
            { new Date().getFullYear() }


        </Typography>
    )
}

export default Copyright;