import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { Button, CircularProgress, } from '@mui/material'

import { addcontact } from '../../JS/Actions/contact'


function AddContact() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const load= useSelector(state => state.contactReducer.load)

  const [newContact,setContact] = useState({});

  const [file,setFile] = useState(null);

  const handleChange = (e) => {
    setContact({ ...newContact, [e.target.name]: e.target.value });
  };
  
  const handlePhoto = (e) => {
    setFile(e.target.files[0])
  };

  const handleAdd =(e) => {

    e.preventDefault();

    let data = new FormData();

    data.append("name", newContact.name);
    data.append("email", newContact.email);
    data.append("phone", newContact.phone);
    data.append("image", file);

    dispatch(addcontact(data, navigate));
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <div>
        <TextField
          id="standard-basic"
          label="name"
          variant="standard"
          type="text"
          onChange={handleChange}
          name="name"
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          type="email"
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="phone"
          variant="standard"
          type="number"
          onChange={handleChange}
          name="phone"
        />
        <br/>
        <br/>
        
        <input
        type="file"
        encType= "multipart/form-data" onChange = {handlePhoto}
      />

        <br/>
        <br/>
        {load ?
        <Button variant="contained" color="success" onClick = {handleAdd} >
          Add Contact <CircularProgress  sx={{color :"black"}}/> 
        </Button>
        :
        <Button variant="contained" color="success" onClick = {handleAdd} >
          Add Contact
        </Button>
        }  
    </div>
      </div>
  );

  }

export default AddContact
