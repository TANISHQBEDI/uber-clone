const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name should be atleast 3 characters long'],
        },
        lastname:{
            type:String,
            minlength:[3,'First name should be atleast 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Password should be atleast 6 characters long'],
        select:false
    },
    socketID:{
        type:String,
    }
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}


const userModel=mongoose.model('user',userSchema);

module.exports=userModel;