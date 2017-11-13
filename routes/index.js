'use strict';
var express = require('express');
var router=express();
var wikiRouter=require('./wiki.js');
var userRouter=require('./user.js');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


module.exports=router;
