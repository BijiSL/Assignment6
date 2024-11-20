const express=require('express');
const app=express();
const dotenv=require('dotenv');
require('dotenv').config();
const cors=require('cors');
const PORT=process.env.PORT;
require('./db/connection');
const  userroutes=require("./routes/userroutes")
const employeeroutes=require("./routes/employeeroutes")
app.use(cors());

app.use('/user',userroutes);
app.use('/employee',employeeroutes);

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})