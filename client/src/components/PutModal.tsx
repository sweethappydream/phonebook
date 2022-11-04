import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props:any) {
  const {form, setForm, onPutSubmit, open, handleClose} = props;

  const onChange = (event:any) => {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update an address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update a new addres please fill out the following information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            value={form.firstname}
            onChange={onChange}
            label="Frist Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            value={form.lastname}
            onChange={onChange}
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            value={form.phone}
            onChange={onChange}
            label="Phone Number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onPutSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
