const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { string } = require('joi')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requear:true
    },
    email:{
        type:String,
        requear:true
    },
    phone:{
        type:String,
        requear:true
    },
    password:{
        type:String,
        requear:true
    },
    cpassword:{
        type:String,
        requear:true
    },
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
})



//we are hasing the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.password,12)

    }
    next();
})
userSchema.methods.generateAuthToken =async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
            this.tokens=this.tokens.concat({token:token})
            // HEIR     token=schema token:token= let token

        await this.save();
        return token;
    }catch (err){
        console.log(err)
     }
}
// after all this code then export, 
// not folow this before the export code not run,
const User = mongoose.model('User',userSchema);
module.exports =User;