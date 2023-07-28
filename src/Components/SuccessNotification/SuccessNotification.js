import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {toast,ToastContainer}from 'react-toastify'
import { clearSuccessUser } from '../../JS/Actions/user';
const SuccessNotification = (success) => {
    const [show,setShow]=useState(true);
    const dispatch= useDispatch()
useEffect(() => {
    setTimeout(() => {
        setShow(false);
    dispatch(clearSuccessUser());},3000);
},[show,dispatch]);
const customId="";
    return (
    <div>
        {show && (
    <div>
    {toast.success(success.msg, {toastId: customId})}
    <ToastContainer position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false} 
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    className="toast-text"
    pauseOnHover
    theme="dark"
    limit={1}
    />
    </div>
    )}
    </div>
)
}

export default SuccessNotification

