const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    place:String,
    salary:Number,
password:String,
phonenumber:Number
});

const employeeModel=mongoose.model('employeedatas',employeeSchema);
module.exports=employeeModel;