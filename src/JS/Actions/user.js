import axios from 'axios';
import { LOAD_USER , REGISTER_USER,FAIL_USER, LOGIN_USER, CURRENT_USER, LOGOUT_USER, CLEAR_SUCCESSUSER, CLEAR_ERRORUSER,EDIT_PASSWORDUSER} from '../ActionType/user';

export const register =(newUser,navigate) =>async(dispatch) =>{
    dispatch({ type: LOAD_USER}) ;
    try{
        let result =await axios.post("/api/user/register", newUser)
        dispatch({ type: REGISTER_USER, payload : result.data}) ;
        navigate('/');
        
    }
    catch(error){
        dispatch({ type: FAIL_USER, payload: error.response.data.error}) ;
    }
}
export const login =(user, navigate) =>async(dispatch) =>{
    dispatch({ type: LOAD_USER}) ;
    try{
        let result =await axios.post("/api/user/login", user)
        dispatch({ type:LOGIN_USER, payload : result.data}) ;
        navigate('/');
        
    }
    catch(error){
        dispatch({ type: FAIL_USER, payload: error.response.data.error}) ;
    }
}
export const currentUser =() =>async(dispatch) =>{
    dispatch({ type: LOAD_USER}) ;
    try{
        const config ={
            headers : { Authorization : localStorage.getItem("token")
            }
        }
    let result = await axios.get("/api/user/current",config);
    dispatch({ type:CURRENT_USER, payload : result.data}) ;
    }
    catch(error){
    dispatch({ type: FAIL_USER, payload: error.response.data.error}) ;
    }
}
export const logout =(user) =>async(dispatch) =>{
    dispatch({ type: LOGOUT_USER}) ;

}
export const updateUserPassword= (id,newUser,navigate) => async(dispatch)=>{
    dispatch({ type: LOAD_USER}) ;
    try{
        const config ={
            headers : { Authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.put(`/api/user/updateUserPassword/${id}`,newUser,config);
        dispatch({ type: EDIT_PASSWORDUSER, payload: result.data});
        navigate('/');
    }
    catch(error){
        dispatch({ type: FAIL_USER, payload: error.response.data.error}) ;
        }
}
export const clearSuccessUser =() =>{
    return  {
    type: CLEAR_SUCCESSUSER
    };
}

export const clearErrorsUser =() =>{
    return  {
    type: CLEAR_ERRORUSER 
    };
}




