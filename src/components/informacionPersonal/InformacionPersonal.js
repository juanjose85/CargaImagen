// Componente paa capturar la informacion personal.
import React from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';

const InformacionPersonal = ({ onSubmit}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
    gender: 'Male', // Valor predeterminado
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className='info-persona-form' onSubmit={handleSubmit}>
      <h5>Ingresa tus datos personales.</h5>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField fullWidth label="Nombre" name="name" value={formData.name} onChange={handleChange} required />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField fullWidth label="Edad" name="age" type="number" value={formData.age} onChange={handleChange} required />
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Género</InputLabel>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <MenuItem value="Male">Hombre</MenuItem>
              <MenuItem value="Female">Mujer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary">
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InformacionPersonal;