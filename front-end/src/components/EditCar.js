import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditCar = (props) => {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({brand: '', model: '', year: '', color: '', price: ''});

  const handleClickOpen = () => {
    console.log(props.car.values.brand);
    setCar({brand: props.car.values.brand, model: props.car.values.model, color: props.car.values.color,
      year: props.car.values.year, fuel: props.car.values.fuel, price: props.car.values.price })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    props.updateCar(car, props.link);
    handleClose();
  }

  return (
    <div>
      <Button color="primary" size="small" onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Edit car</DialogTitle>
         <DialogContent>
            <TextField autoFocus fullWidth label="Brand" name="brand"
              value={car.brand} onChange={handleChange}/><br/>
            <TextField autoFocus fullWidth label="Model" name="model"
              value={car.model} onChange={handleChange}/><br/>
            <TextField autoFocus fullWidth label="Color" name="color"
              value={car.color} onChange={handleChange}/><br/>
            <TextField autoFocus fullWidth label="Year" name="year"
              value={car.year} onChange={handleChange}/><br/>
            <TextField autoFocus fullWidth label="Price" name="price"
              value={car.price} onChange={handleChange}/><br/>
         </DialogContent>
         <DialogActions>
           <Button color="secondary" onClick={handleClose}>Cancel</Button>
           <Button color="primary" onClick={handleSave}>Save</Button>
         </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditCar;
