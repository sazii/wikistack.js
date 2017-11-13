'use strict';
var express = require('express');
var router=express();

router.get('/',function(req,res){
  res.send('sjagroewhyro')
});

router.post('/',function(req,res){
  res.send('posttt')
});

router.get('/add',function(req,res){
  res.send('adddd')
});

module.exports=router;
