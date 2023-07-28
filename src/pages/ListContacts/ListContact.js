import React, { useEffect } from 'react'
import "./ListContacts.css";
import { useDispatch, useSelector } from 'react-redux'
import { getcontacts } from '/Users/olfabendhaou/Desktop/mongoose/client/src/JS/Actions/contact.js';
import CircularProgress from '@mui/material/CircularProgress';
import CardContact from '/Users/olfabendhaou/Desktop/mongoose/client/src/Components/CardContact/CardContact.js';

function ListContact() {

  const dispatch= useDispatch()
  const listContacts= useSelector(state => state.contactReducer.listContacts)
  const load= useSelector(state => state.contactReducer.load)

  useEffect(() =>{ dispatch(getcontacts())},[dispatch]);

  console.log(listContacts)

  return (
    <div  >
      <h1>Contacts List</h1> 
      <br/>
      <br/>
      <div className="Card">
      {load ? <CircularProgress />  : 
      listContacts.map ((el)=><CardContact Contact={el}  key={el._id}/>)}
      </div>
      </div>
  )}
export default ListContact
