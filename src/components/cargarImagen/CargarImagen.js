// Componente para la carga de imagen.
import React from 'react';
import { Input, Button } from '@mui/material';
import { Grid } from '@mui/material';

import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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
      <h5>Proporcionar la imagen de su preferencia.</h5>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Subir una imagen
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </Button>
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