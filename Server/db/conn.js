
const mongoose = require('mongoose')

const DB = process.env.DATABASE;
mongoose.connect(DB
    // {
    //     useNewUrlParser:true,
    //     useCreateIndex: true,
    //     UseUnifiedTopology: true,
    //     useFindAndModify: false
    // }this is for web connection
    ).then(() => 
    {
        
        console.log("connect...");
    }
    ).catch((error)=> {
        console.log(DB)
        console.log("Error connection.....")
    })