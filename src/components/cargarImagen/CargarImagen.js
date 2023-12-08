// Componente para la carga de imagen.
import React from 'react';
import { Input, Button } from '@mui/material';
import { Grid } from '@mui/material';

const CargarImagen = ({ onSubmit }) => {
  const [image, setImage] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(image);
  };

  return (
    <form className='info-persona-form' onSubmit={handleSubmit}>
      <h5>Selecciona una imagen.</h5>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Input type="file" accept="image/*" onChange={handleImageChange} required />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary">
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CargarImagen;