'use strict';
var express = require('express');
var router=express();
var models= require('../models')

var Page = models.Page;

router.get('/',function(req,res){
  res.redirect('..')
});

router.post('/',function(req,res){
console.log(req.body);
 var page = Page.build({
    title: req.body.title,
    content: req.body.pageContent
  });
page.save().then(function successHandler(){
  res.redirect('/');
});

});

router.get('/add',function(req,res){
  res.render('addpage');
});

module.exports=router;
