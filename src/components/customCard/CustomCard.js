// Componente que muestra el resumen de la informacion capturada

import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import './css/customCard.css';

const CustomCard = ({ title, children }) => {
  return (
    <Card>
        <Box className='custom-card-box'>
            <Typography className='custom-card-box-title' variant="h6" component="h2">{title||'Ingresar un titulo'}</Typography>
        </Box>
        {children}
    </Card>
  );
};

export default CustomCard;