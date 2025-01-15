const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose');

const captainSchema=new mongoose.Schema({
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
    },
    status: {
        type: String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color should be atleast 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            unique:true,
            minlength:[3,'Plate should be atleast 3 characters long'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity should be atleast 1'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lon:{
            type:Number,
        }
    }
})


captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    return token;
}

captainSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema);

module.exports=captainModel;