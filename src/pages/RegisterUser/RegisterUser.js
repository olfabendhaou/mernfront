import { Button, FormControl, IconButton, InputAdornment, InputLabel, Input, TextField } from '@mui/material'
import React, {useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { register } from '/Users/olfabendhaou/Desktop/mongoose/client/src/JS/Actions/user';
import { useNavigate} from 'react-router-dom';
import { useSelector} from 'react-redux';
function RegisterUser() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  const isAuth = useSelector (state => state.userReducer.isAuth);
  const [newUser, setNewUser]= useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange =(e)=>{
    setNewUser({...newUser, [e.target.name] : e.target.value});
  }
  const handleRegister = (e)=>{
    e.preventDefault();
    dispatch(register(newUser,navigate));
  }
  return (
    <div>
      {isAuth? navigate ('/') :
        <div>
        <h1>RegisterUser</h1>
        <br /><br />
        <TextField sx={{ m: 1, width: '25ch' }} id="standard-basic" label="First Name" variant="standard" onChange={handleChange} name='Firstname' />
        <br/> <br/>
        <TextField sx={{ m: 1, width: '25ch' }} id="standard-basic" label="Name" variant="standard" onChange={handleChange} name='name'/>
        <br/> <br/>
        <TextField sx={{ m: 1, width: '25ch' }} id="standard-basic" label="E-mail" variant="standard" onChange={handleChange} name='email'/>
        <br/> <br/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          onChange={handleChange} name='password'
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
        <br />
        <Button variant="contained" color="success" onClick={handleRegister} >
            Inscription
        </Button>
        </div>
      }
    </div>
  )
}
export default RegisterUser
