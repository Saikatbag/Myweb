const lodash = require('lodash');
const { User, validate } = require('../models/user');
const mongooes = require('mongoose');
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

//Creat a New user .........
router.get('/me', async (req, res) => {
    
    let email = await User.findOne({ email: req.body.email });
    let pass = await User.findOne({ password: req.body.password });
    
    
    if (!email){

        return res.status(400).send('wrong user .....');
    }
    else if (!pass){

        return res.status(400).send('wrong Password......');
    }

    else{

        res.status(200).send('Login Successful......');
    }
});

router.get('/list', async (req, res) => {
    
    const result = await User.find();
    if (!result){
        return res.status(400).send('wrong user .....');
    }
    res.status(200).send(result);
   
});

router.post('/', async (req, res) => {
    const error = validate(req.body);
    
    if (error.error) return res.status(400).send(error.error.message);
    
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already register this email.....');
    
    // user value change ......
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    await user.save();
    // wait untile Save the user...
    res.send(user);
});
//export the rrouter module.....

module.exports = router;
