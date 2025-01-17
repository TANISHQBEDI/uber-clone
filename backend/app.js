const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors')
const connectToDB=require('./db/db');
const cookieParser=require('cookie-parser');

const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');

connectToDB();

const app=express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send('Hello')
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports=app;