
import { Button, FormControl } from '@mui/base'
import { IconButton, InputAdornment, InputLabel, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../JS/Actions/user';

function LoginUser() {
    const isAuth = useSelector (state => state.userReducer.isAuth);
    const [user, setUser] = useState({});
    const navigate = useNavigate;
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleUser= (e)=> {
        e.preventDefault();
        dispatch(login(user,navigate));
    }

    return (      
    <div>
    {isAuth ? navigate("/")
    :
    <div>
        <h1>Login user </h1> 
        <br/> <br/>
        <TextField sx={{ m: 1, width: '25ch' }} id="standard-basic" label="E-mail" variant="standard" onChange={handleChange} name='email' />
        <br/> 
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">password</InputLabel>
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
        <br /><br/>
        <Button variant="contained" color="success" onClick={handleUser} >
            <PersonIcon/> LogIn
        </Button>
        <br /><br/>
        <Button  href='/Register' variant="outlined" >
            Don't have an account? Create One !
        </Button>
        </div>
    }
    </div>
    )
}

export default LoginUser