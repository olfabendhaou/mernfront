
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import Home from '/Users/olfabendhaou/Desktop/mongoose/client/src/pages/Home /Home.js';
import Error from './pages/Error/Error.js';
import AddContact from './pages/AddContact/AddContact';
import ListContact from '/Users/olfabendhaou/Desktop/mongoose/client/src/pages/ListContacts/ListContact';
import EditContact from './pages/EditContact/EditContact.js';
import LoginUser from './pages/LoginUser/LoginUser';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import UpdatePassword from './pages/UpdateUser/UpdatePassword';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './JS/Actions/user.js';
import { useEffect } from 'react';
import SuccessNotification from './Components/SuccessNotification/SuccessNotification';
import ErrorNotification from './Components/ErrorNotification/ErrorNotification';


function App() {
  const isAuth = useSelector (state => state.userReducer.isAuth);
  const usersuccess= useSelector (state => state.userReducer.success);
  const erroruser = useSelector (state => state.userReducer.errors);
  const dispatch= useDispatch()
  useEffect(()=>{
    if (localStorage.getItem("token")){
      dispatch(currentUser())
    }
  },[dispatch])
  return (
    <div className="App">
    {usersuccess && usersuccess.map((el) =><SuccessNotification success={el}/>)}
    {erroruser && erroruser.map((el) =><ErrorNotification errors={el}/>)}
      <ResponsiveAppBar/> 
      <Routes>
        <Route path="/" element = {<Home/>}/> 
        <Route path="/*" element = {<Error/>}/> 
        {isAuth && <Route path="/AddContact" element = {<AddContact/>}/>}   
        <Route path="/ListContact" element = {<ListContact/>}/> 
        <Route path="/EditContact/:id" element = {<EditContact/>}/> 
        <Route path="/Login" element = {<LoginUser/>}/> 
        <Route path="/Register" element = {<RegisterUser/>}/> 
        {isAuth &&<Route path="/UpdatePassword/:id" element = {<UpdatePassword/>}/> }
      </Routes>
    </div>
  );
}

export default App;
