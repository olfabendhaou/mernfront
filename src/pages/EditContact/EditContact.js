import TextField from '@mui/material/TextField'
import { Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch,  useNavigate } from 'react-router-dom';
import { getcontact, editcontact } from '../../JS/Actions/contact';

function EditContact() {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const match = useMatch("/EditContact/:id");
  const [newcontact,setcontact] =useState({});
  const [file,setFile] = useState(null);
  const contacttoget=useSelector(state=>state.contactReducer.contacttoget);

  // const load=useSelector(state=>state.contactReducer.load)

  useEffect(() =>{ 
    dispatch(getcontact(match.params.id))},[]);

  const handleChange = (e) => {
      setcontact({ ...newcontact, [e.target.name]: e.target.value });
  };
  
  const handlePhoto = (e) => {
      setFile(e.target.files[0])
  };
  
  const handleEdit =(e) => {
      e.preventDefault();
      let data = new FormData();
      data.append("name",newcontact.name);
      data.append("email",newcontact.email);
      data.append("phone",newcontact.phone);
      data.append("image",file);
      dispatch(editcontact(match.params.id, data,navigate));
      
  };
    return (
    <div>
    <h1>Edit Contact</h1>
    <div>
      <TextField
        id="standard-basic"
        type="text"
        label={`${contacttoget.name}`}
        variant="standard"
        onChange={handleChange}
        name="name"
      />
      <br />
      <br />
      <TextField
        id="standard-basic"
        type="email"
        label={`${contacttoget.email}`}
        variant="standard"
        onChange={handleChange}
        name="email"
      />
      <br />
      <br />
      <TextField
        id="standard-basic"
        type="number"
        label={`${contacttoget.phone}`}
        variant="standard"
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
      
      <Button variant="contained" color="success" onClick = {handleEdit} >
        Edit Contact
      </Button>
  </div>
    </div>
)
}

export default EditContact
