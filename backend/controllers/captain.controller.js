const captainModel = require('../models/captain.model');
const {validationResult}=require('express-validator');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password,vehicle}=req.body;

    const captainExists=await captainModel.findOne({email});

    if(captainExists){
        return res.status(400).json({errors:[{msg:'Captain already exists'}]});
    }

    const hashPassword=await captainModel.hashPassword(password);

    const captain= await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });

    const token=captain.generateAuthToken();

    res.status(201).json({token});
}


module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}=req.body;

    const captain=await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({errors:[{msg:'Captain not found'}]});
    }

    const isMatch=await captain.comparePassword(password);

    if (!isMatch){
        return res.status(401).json({errors:[{msg:'Invalid credentials'}]});
    }

    const token=captain.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({token,captain});
}

module.exports.logoutCaptain=async(req,res,next)=>{
    res.clearCookie('token');
    const token=req.headers.authorization?.split(' ')[1] || req.cookies.token;
    await blacklistTokenModel.create({token});
    res.status(200).json({msg:'Logged out successfully'});
}



module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json({captain:req.captain});
}