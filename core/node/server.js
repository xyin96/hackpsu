var http = require('http');
var mongo = require('mongoose');
var apiaddr = require('./apiaddr.js');
var user = require('./user.js');
var Api = require('./apimodules/api.js');
var ApiSequence = require('./apimodules/api-sequence.js');

var mongoose = mongo.connect('mongodb://localhost:27017/AGGAPI');

var app = require('./routes.js');

http.createServer(app).listen(1337, 'localhost');

console.log('Server running at http://127.0.0.1:1337/');
