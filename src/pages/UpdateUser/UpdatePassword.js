import { FormControl, InputLabel,Input, InputAdornment, IconButton, Button} from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { updateUserPassword } from '/Users/olfabendhaou/Desktop/mongoose/client/src/JS/Actions/user';
import { useMatch, useNavigate} from 'react-router-dom';


const UpdatePassword = () => {
  const match =useMatch("/UpdatePassword/:id")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);
  const [newUser, setNewUser]= useState({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  const handleChange =(e)=>{
    setNewUser({...newUser, [e.target.name] : e.target.value});
  };
  const handleUpdate= (e)=>{
    e.preventDefault();
    dispatch(updateUserPassword(match.params.id,newUser,navigate));
  }
  return (
    <div>
      <h1>UpdatePassword</h1>
      <br /><br />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">old password</InputLabel>
        <Input
          onChange={handleChange} name='oldPassword'
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br /><br />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">new password</InputLabel>
        <Input
          onChange={handleChange} name='newPassword'
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br /><br />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password"> confirm password </InputLabel>
        <Input
          onChange={handleChange} name='confirmpassword'
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br /><br />
      <Button variant="contained" color="success" onClick = { handleUpdate} >
      Mise à jour
    </Button>
    </div>
  )
}

export default UpdatePassword
