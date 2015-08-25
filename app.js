var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


var cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// app.use(/^\/(?!.*items)$/,function(req, res) {
app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.get('/items', function(req, res) {
//   req.readFile('items.json', function(err, data) {
//    res.json(data)
//   })
// })



var port = process.env.PORT || 3000;


app.listen(process.env.PORT || 3000, function(){
   console.log('listening');
});


module.exports = app;
