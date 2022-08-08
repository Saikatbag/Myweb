const dotenv = require('dotenv')
const express = require('express');

const app = express();

app.use(express.json())
// this line is basicaly convart json file to string

dotenv.config({path:'./config.env'})
//This .env file are use for hide for pass word or port to a separet file

require('./db/conn')
// database file are import 
// require('./model/User')
app.use(require('./router/auth'))
const PORT = process.env.PORT;


    // app.get('/',(req,res)=> {
    //     res.send("helo Mongo is Runing")
    // })

    app.listen(PORT||6000,()=>{
        console.log(`server port Runing ${PORT}.....`)
    })
    // server started port when Port not avalivel the start 6000 port(PORT || 6000)