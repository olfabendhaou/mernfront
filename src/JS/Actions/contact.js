
import axios from 'axios';

import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS, ADD_CONTACT,GET_CONTACT} from '../ActionType/contact';




export const getcontacts = ()=> async(dispatch) =>{

    dispatch({ type : LOAD_CONTACTS})
        try{
            let result = await axios.get('/api/contact/all-contact')
            dispatch({ type : GET_CONTACTS , payload : result.data.listContacts })
        }
        catch (error){
            dispatch ({ type : FAIL_CONTACTS , payload : error.response})

        }
}
export const addcontact = (newContact , navigate)=> async(dispatch) =>{

    dispatch({ type : LOAD_CONTACTS})
        try{
            const config ={
                headers : { Authorization : localStorage.getItem("token")
                }
            }
            let result = await axios.post('/api/contact/add', newContact,config)

            dispatch({ type : ADD_CONTACT, payload : result.data })
            
            navigate ('/ListContact')

            dispatch(getcontacts())
        }
        catch (error) {
            
            dispatch ({ type : FAIL_CONTACTS , payload : error.response})

        }
    }
    export const deletecontact = (_id)=> async(dispatch) =>{

        dispatch({ type : LOAD_CONTACTS})
            try{
                await axios.delete(`/api/contact/${_id}`) 
                dispatch(getcontacts ())
            }
            catch (error){
                dispatch ({ type : FAIL_CONTACTS , payload: error.response})
    
            }
        }
export const editcontact = (id, newcontact,navigate)=> async(dispatch) =>{

            dispatch({ type : LOAD_CONTACTS})
                try{
                    await axios.put(`/api/contact/${id}`,newcontact)
                    dispatch(getcontacts ())
                    navigate(-1)
                }
                catch (error){
                    dispatch ({ type : FAIL_CONTACTS , payload : error.response})
        
                }
}
export const getcontact = (id)=> async(dispatch) =>{

    dispatch({ type : LOAD_CONTACTS})
        try{
            let result = await axios.get(`/api/contact/${id}`)
            dispatch({ type : GET_CONTACT, payload : result.data.contacttoget })

        }
        catch (error){
            dispatch ({ type : FAIL_CONTACTS , payload : error.response})

        }
}