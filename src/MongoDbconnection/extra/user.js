const {Genre, validate} = require('../models/user');
const mongoose = require('mongoose');
const express =require('express');
const { User } = require('../models/user');
const router = express.Router();


router.post('/',async(req,res) =>{
    const user = await User.find().sort('name');
    res.send(user)
})


module.exports = router;
