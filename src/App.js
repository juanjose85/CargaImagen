import './App.css';

import { useState } from 'react';
import InformacionPersonal from './components/informacionPersonal/InformacionPersonal';
import CargarImagen from './components/cargarImagen/CargarImagen';
import Resumen from './components/resumen/Resumen';
import { Button, Container, Card, Box, Grid } from '@mui/material';

function App() {

  // Almacenar y controlar los pasos.
  const [step, setStep] = useState(1);
  // Estado para almacenar la información personal
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    age: '',
    gender: '',
  });

  // Estado para almacenar la imagen
  const [image, setImage] = useState(null);

  // Función para manejar la información personal
  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
    setStep(2); // Pasar al siguiente paso
  };

  // Función para manejar la carga de la imagen
  const handleImageSubmit = (selectedImage) => {
    setImage(selectedImage);
    setStep(3); // Pasar al siguiente paso
  };

  // Reiniciar el proceso.
  const resetForm = () => {
    setPersonalInfo({
      name: '',
      age: '',
      gender: '',
    });
    setImage(null);
    setStep(1); // Reiniciar al primer paso
  };

  return (
    <div className='App-area'>
      <Container maxWidth="md">
        <Card>
          {/* Mostrar un botón para reiniciar el formulario si es necesario */}
          {step === 3 && (
            <Box className='info-persona-box'>
              <Grid container spacing={2}>
                <Grid item xs={10}></Grid>
                <Grid item xs={2}>
                  <Button type="button" variant="contained" color="primary" onClick={resetForm}>
                    Reiniciar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
          {step === 1 && <InformacionPersonal onSubmit={handlePersonalInfoSubmit} />}
          {step === 2 && <CargarImagen onSubmit={handleImageSubmit} />}
          {step === 3 && <Resumen personalInfo={personalInfo} image={image}/>}
        </Card>

      </Container>
    </div>
  );
}

export default App;
