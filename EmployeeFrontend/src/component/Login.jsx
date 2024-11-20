import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosinterceptors';

const Login = () => {
  const navigate=useNavigate();
  const [loginForm,setLoginform]=useState({
    email:'',
    password:''});
  const inputhandler=(e)=>{
    
    setLoginform({...loginForm,[e.target.name]:e.target.value})
    
    
       }
  
       const capValue=()=>{
   
        console.log(loginForm);
        axiosInstance.post('http://localhost:3000/employee/login',loginForm)
        .then((res)=>{
    alert(res.data.message);
    if(res.data.token)
   
     {
       sessionStorage.setItem('token',res.data.token);
       
       navigate('/employee');
       
     }
     
     
     
    console.log(res.data);
        })
        .catch((error)=>{
          console.log(error)
        })}
  return (
    <div>
        <Box>
        
            <h1>Login</h1>
            <TextField id='outlined' label='Username' variant='outlined' name='email' onChange={inputhandler}/><br/><br/>
            <TextField id='outlined' label='Password' variant='outlined'name='password' onChange={inputhandler}/><br/><br/>
            <Button variant='contained' onClick={capValue}>Login</Button><br/><br/>
            <Typography style={{color:'darkgreen'}}>
            <Link to={'/signup'}>New User?Please click me</Link></Typography>
        </Box>
       
    </div>
  )
}

export default Login