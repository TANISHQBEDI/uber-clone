const mongoose = require('mongoose');

const uri=process.env.DB_CONNECT;

async function connectToDB() {
    await mongoose.connect(uri)
    .then(()=>{
        console.log('Connected to DB');
    })
    .catch((err)=>{
        console.log('Error in connecting to DB');
        console.log(err);
    });
}

module.exports = connectToDB;