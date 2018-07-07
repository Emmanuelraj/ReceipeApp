//express
const express = require('express');

//import the path
const path = require('path');

var app  = express();
//mongoose
const mongoose = require('mongoose');

//import bodyParser
const bodyParser = require('body-parser');

//import the appController
const appController = require('./controllers/appController');

//import keys
const keys = require('./config/keys');


var portNo ='3000';


//set view engine
app.set('view engine','ejs');


//public folder
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(keys.mongoose.mongodbURI);

var db = mongoose.connection;



db.on('err',function (err)
 {
   console.log('error on DB'+err);
})


//db.once the connect
db.once('connect',function()
{
  console.log('mlab db connected');

})


//middleware for body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//calling the controller
appController(app);


//server port no 3000
app.listen(portNo);

console.log('server listen  to the port no'+portNo);
