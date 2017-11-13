'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
//var sequili = require("./models/index.js");
var models = require('./models');
var routes=require('./routes');

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(morgan('dev'));


// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
app.use('/', routes);


// start the server
/*var server = app.listen(8080, function(){ // 8080 is sazi's port
  console.log('listening on port 1337');
});*/

// models.User.sync({})
// .then(function () {
//     return models.Page.sync({})
// })
models.db.sync({force:true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(8080, function () {//for sazi
        console.log('Server is listening on port 1337!');
    });
})
.catch(console.error);

app.get('/', function(req, res, next){
  res.render('index', { title: 'Wikistack.js' });
  });
