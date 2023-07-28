import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { deletecontact } from '/Users/olfabendhaou/Desktop/mongoose/client/src/JS/Actions/contact.js';


function CardContact({Contact}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
    <div>
    <Card sx={{ width:"300"  , mb:"10%"}}>
    <CardMedia
        component="img"
        alt="contact"
        height="180"
        image={Contact.profile_img}
    /> 
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
    {Contact.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {Contact.email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            {Contact.phone}
                </Typography>
    </CardContent>
    <CardActions>
        <Button size="small"  color= "success" variant="contained" onClick={()=>{navigate(`/EditContact/${Contact._id}`)}}>Edit</Button>
        <Button size="small" color= "error"  variant="contained" onClick={()=>{dispatch(deletecontact(Contact._id))}} >delete <DeleteIcon/></Button>
    </CardActions>
    </Card>
    </div>
    )
}

export default CardContact
