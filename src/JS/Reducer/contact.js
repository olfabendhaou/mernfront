// importation

import {LOAD_CONTACTS , GET_CONTACTS ,  GET_CONTACT  , FAIL_CONTACTS , ADD_CONTACT  } from "../ActionType/contact.js"



// initialization
const initialState = {
    listContacts : [],
    contacttoget: {},
    errors : null,
    load : false,
    newContact : {}
}


// pure function 

const contactReducer = (state=initialState , {type,payload}) => {

    switch(type) {

            case LOAD_CONTACTS :
                return {...state,load : true}
                case  GET_CONTACTS :
                    return {...state, load:false, listContacts : payload}
                case GET_CONTACT :
                    return {...state,load:false,  contacttoget : payload}
                case FAIL_CONTACTS :
                    return {...state,load:false, errors: payload}
                case ADD_CONTACT :
                        return {...state,load : false , newContact : payload.newContact}
                default: 
                        return state ;
    } 
}
export default contactReducer