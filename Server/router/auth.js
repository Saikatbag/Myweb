const express = require('express');
const User = require('../model/userSchema');
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = express.Router();
require('../db/conn')

router.get('/', (req, res) => {
    res.send("Helo i am express router ")
})
//Registration Route==================================================

router.post('/cv', (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ Error: 'fill the all of filed' })
    }
    User.findOne({ email: email })
        // thair are two email, db email: body email
        .then((userExist) => {
            if (userExist) {
                return res.status(201).json({ Error: 'Email alredy register' })
            }
            else if (password != cpassword) {
                return res.status(201).json({ Error: 'password and cpassword not match' })
            }

            const user = new User({ name, email, phone, password, cpassword })
            user.save().then(() => {
                res.status(201).json({ message: 'User Register Success' })
            }).catch((err) => res.status(500).json({ Error: 'Failed Register' }))
        }).catch(err => { console.log(err) })

})

// Login Router=========================================================
// when used async then use await and also used try and catch block 

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ Error: 'Invalide password email' })
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            const token = await userLogin.generateAuthToken();
            
            res.cookie("jwttoken",token, {
                expires:new Date(Date.now()+3658000000),
                httpOnly:true
            })
            // cookies save
            console.log(token)
            if (isMatch) {
                res.json({ message: 'User Signing' })
            }
            else {
                res.json({ message: "Wrong email or password--" })
            }
        }
        else {
            res.json({ message: "Wrong email or password" })
        }
    } catch (err) {
        res.json({ message: 'User error'})
    }
})

module.exports = router;