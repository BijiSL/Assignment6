const express=require('express');
const router=express.Router();
router.use(express.json());
const jwt=require('jsonwebtoken');
const employeeModel = require('../model/employeeModel.js');

function verifytoken(req,res,next){

    let token=req.headers.token;
    try {
        if(!token) throw 'Unauthorized access';
        let payload=jwt.verify(token,'employeeApp');

        if(!payload) throw 'Unauthorized access';
        next()
    } catch (error) {
        console.log(error)
    }
}
router.post("/addemployee/add",async(req,res)=>{
  try {
      var item=req.body;
var data=new employeeModel(item);
await data.save();
res.status(200).send("data added successfully")
  } catch (error) { 
      res.status(404).send("unable to send  data")
 
  }
});
router.get("/addemployee/get",async(req,res)=>{
  try {
      var data=await employeeModel.find();
      res.status(200).send(data);
      
  } catch (error) {
      res.status(404).send("unable to getdata");
  
  }

  router.delete("/addemployee/del/:id",async(req,res)=>{
    try {
        await employeeModel.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
    } catch (error) {
        res.status(404).send("unable to delete data");
    }
   })
})

router.put("/addemployee/edit/:id",verifytoken,async(req,res)=>{
  try {
      await employeeModel.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).send("edited successfully");
        } catch (error) {
      res.status(404).send("unable to edit data");
 }
})

router.post("/login",async(req,res)=>{
    try {
  const user=await employeeModel.findOne({email:req.body.email});
    if(!user){
res.send({message:"user not found"});
  }
  else if(user.password==req.body.password)
  {
  const payload={email:'adminpanel@gmail.com',role:'Adminpanal'}
console.log(payload)
  const token=jwt.sign(payload,'EmployeeApp')
console.log(token)
   res.status(200).send({message:'Login successful',token:token})
  }
  else{
    res.status(404).send("Invalid creddentials")
  }
    } catch (error) { 
console.log(error)       
    }
});












    


router.post("/employee/add",async(req,res)=>{
    try {
        var item1=req.body;
  var data1=new employeeModel(item1);
  await data1.save();
  res.status(200).send("data added successfully")
    } catch (error) { 
        res.status(404).send("unable to send  data")
   
    }
  });
  router.get("/employee/get",async(req,res)=>{
    try {
        var data1=await employeeModel.find();
        res.status(200).send(data1);
        
    } catch (error) {
        res.status(404).send("unable to getdata");
    
    }
}
)
  
    router.delete("/employee/del/:id",async(req,res)=>{
  
        
  
  
      try {
          await employeeModel.findByIdAndDelete(req.params.id);
          res.status(200).send("deleted successfully");
          
      } catch (error) {
          res.status(404).send("unable to delete data");
  
      }
     
  })
  
  
  router.put("/employee/edit/:id",verifytoken,async(req,res)=>{
  
  
  
  
    try {
        await employeeModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send("edited successfully");
        
    } catch (error) {
        res.status(404).send("unable to edit data");
  
    }
   
  })
  
  
  
  
  
  module.exports=router;
  
  
  
  
  
  
      
  
  






