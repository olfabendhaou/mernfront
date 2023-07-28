import { CLEAR_ERRORUSER, CLEAR_SUCCESSUSER, CURRENT_USER, EDIT_PASSWORDUSER, FAIL_USER, LOAD_USER,LOGIN_USER,LOGOUT_USER,REGISTER_USER  } from "../ActionType/user"

const  initialeState = {
    user: null,
    loadUser : false,
    isAuth : false,
    newUser : {} ,
    errors : null,
    success : null,
}

const userReducer = (state=initialeState, {type,payload}) => {
        switch (type) {
            case LOAD_USER :
                return {...state, loadUser:true};
            case REGISTER_USER :
                localStorage.setItem("token", payload.token);
                return {...state, loadUser:false , newUser: payload.newUser, success: payload.success, isAuth : true};
            case LOGIN_USER :
                localStorage.setItem("token", payload.token);
                return {...state, loadUser:false , user: payload.user, success: payload.success, isAuth : true};               
            case CURRENT_USER :
                return {...state, loadUser: false , isAuth : true};
            case EDIT_PASSWORDUSER :
                return {...state, loadUser:false , user: payload.user, success: payload.success, isAuth : true};
            case LOGOUT_USER :
                localStorage.removeItem("token");
                return {
                    user: null,
                    loadUser : false,
                    isAuth : false,
                    newUser : {} ,
                    errors : null,
                    success : null,
                }
            case FAIL_USER :
                return {...state,loadUser:false, errors: payload};
            case CLEAR_SUCCESSUSER :
                return {...state, errors : null,};
            case CLEAR_ERRORUSER :
                return {...state,   success : null};   
            default: 
                return state ;
}
}

export default userReducer