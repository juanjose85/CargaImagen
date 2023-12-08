// Componente que muestra el resumen de la informacion capturada

import React from 'react';
import { Typography, Box } from '@mui/material';

const Resumen = ({ personalInfo, image }) => {
  return (
    <Box className='info-persona-box'>
      <Typography variant="h4">Información Personal</Typography>
      <Typography>Nombre: {personalInfo.name}</Typography>
      <Typography>Edad: {personalInfo.age}</Typography>
      <Typography>Género: {personalInfo.gender}</Typography>

      {image && (
        <Box mt={3}>
          <Typography variant="h4">Imagen Cargada</Typography>
          <img src={URL.createObjectURL(image)} alt="Imagen" style={{ maxWidth: '100%' }} />
        </Box>
      )}
    </Box>
  );
};

export default Resumen;